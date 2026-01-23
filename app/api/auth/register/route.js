import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response("Email and password required", { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
      provider: "credentials",
    });

    return new Response("User created", { status: 201 });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
