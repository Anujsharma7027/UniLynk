import OTP from "@/models/OTP";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// ✅ ensure DB connection (no connectDB helper needed)
async function ensureDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    await ensureDB();

    const { email } = await req.json();
    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // remove old OTPs
    await OTP.deleteMany({ email });

    // save new OTP
    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: email,
      subject: "Your OTP Code for login UniLynk",
      text: `hey anime, i was going through the student sheet and want to say that Your OTP is ${otp}. Valid for 5 minutes.`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("OTP error:", err);
    return Response.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
