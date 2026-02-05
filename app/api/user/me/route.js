import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    // NEVER return null
    return NextResponse.json({}, { status: 401 });
  }

  await connectDB();

  const user = await User.findOne(
    { email: session.user.email },
    { img: 1, name: 1, branch: 1, year: 1, skill: 1 }
  ).lean();

  // ALWAYS return an object
  return NextResponse.json(user || {});
}
