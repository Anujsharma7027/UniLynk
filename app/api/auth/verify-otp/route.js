import OTP from "@/models/OTP";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// ✅ ensure DB connection
async function ensureDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    await ensureDB();

    const { email, otp } = await req.json();
    if (!email || !otp) {
      return Response.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const record = await OTP.findOne({ email });

    if (!record) {
      return Response.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }

    if (record.expiresAt < new Date()) {
      await OTP.deleteMany({ email });
      return Response.json(
        { error: "OTP expired" },
        { status: 400 }
      );
    }

    // ⚠️ direct comparison (OK for now)
    if (record.otp !== otp) {
      return Response.json(
        { error: "Wrong OTP" },
        { status: 400 }
      );
    }
    

    // cleanup
    await OTP.deleteMany({ email });

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return Response.json({ token });
  } catch (err) {
    console.error("Verify OTP error:", err);
    return Response.json(
      { error: "OTP verification failed" },
      { status: 500 }
    );
  }
}
