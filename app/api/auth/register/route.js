import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import OTP from "@/models/OTP";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    await connectDB();

    // 🔒 Ensure OTP was verified BEFORE registration
    const otpVerified = await OTP.findOne({
      email: normalizedEmail,
      purpose: "register",
    });

    if (otpVerified) {
      return Response.json(
        { error: "OTP not verified" },
        { status: 403 }
      );
    }

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return Response.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email: normalizedEmail,
      password: hashedPassword,
      provider: "credentials",
    });

    return Response.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
