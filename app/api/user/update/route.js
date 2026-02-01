import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { name, branch, year, skill } = await req.json();

    await User.findOneAndUpdate(
      { email: session.user.email },
      {
        name,
        branch,
        year,
        skill,
        profileCompleted: true, // 🔥 IMPORTANT
      }
    );

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
