import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { name, year, branch, skill } = await req.json();

  const updatedUser = await User.findOneAndUpdate(
    { email: session.user.email }, 
    { $set: { name, year, branch, skill } },
    { new: true }
  );

  return Response.json({ success: true, user: updatedUser });
}
