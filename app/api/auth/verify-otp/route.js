import OTP from "@/models/OTP";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  await connectDB();

  const { email, otp, purpose } = await req.json();

  if (!email || !otp) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const record = await OTP.findOne({
    email: email.toLowerCase(),
    otp,
    purpose,
  });

  if (!record) {
    return Response.json({ error: "Invalid OTP" }, { status: 400 });
  }

  if (record.expiresAt < new Date()) {
    return Response.json({ error: "OTP expired" }, { status: 400 });
  }

  // ✅ OTP verified → delete it
  await OTP.deleteMany({ email: email.toLowerCase(), purpose });

  return Response.json({ success: true });
}
