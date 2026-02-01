import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function RedirectHandler() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/");
  }

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user || !user.profileCompleted) {
    redirect("/UserinfoForm");
  }

  redirect("/dashboard");
}
