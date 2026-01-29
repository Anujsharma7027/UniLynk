import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: String, 
  otp: String,
  expiresAt: Date,
});

export default mongoose.models.OTP || mongoose.model("OTP", otpSchema);
