import OTP from "@/models/OTP";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

async function ensureDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    await ensureDB();

    const { email, purpose } = await req.json();

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!["register", "login"].includes(purpose)) {
      return Response.json({ error: "Invalid purpose" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // ⛔ prevent spam (60s cooldown)
    const lastOtp = await OTP.findOne({ email: normalizedEmail, purpose })
      .sort({ createdAt: -1 });

    if (lastOtp && Date.now() - lastOtp.createdAt < 60_000) {
      return Response.json(
        { error: "Please wait before requesting another OTP" },
        { status: 429 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await OTP.deleteMany({ email: normalizedEmail, purpose });

    await OTP.create({
      email: normalizedEmail,
      otp,
      purpose,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"UniLynk" <${process.env.EMAIL}>`,
      to: normalizedEmail,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
