import OTP from "@/models/OTP";
import mongoose from "mongoose";

async function ensureDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function POST(req) {
  try {
    await ensureDB();

    const { email, otp, purpose } = await req.json();

    if (!email || !otp || !purpose) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const record = await OTP.findOne({
      email: normalizedEmail,
      purpose,
    }).sort({ createdAt: -1 });

    if (!record) {
      return Response.json({ error: "OTP not found" }, { status: 400 });
    }

    if (record.expiresAt < new Date()) {
      await OTP.deleteMany({ email: normalizedEmail, purpose });
      return Response.json({ error: "OTP expired" }, { status: 400 });
    }

    if (record.attempts >= 5) {
      await OTP.deleteMany({ email: normalizedEmail, purpose });
      return Response.json({ error: "Too many attempts" }, { status: 429 });
    }

    if (record.otp !== String(otp)) {
      record.attempts += 1;
      await record.save();
      return Response.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // ✅ OTP verified
    await OTP.deleteMany({ email: normalizedEmail, purpose });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "OTP verification failed" },
      { status: 500 }
    );
  }
}
