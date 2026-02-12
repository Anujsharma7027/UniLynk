import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const forms = await Form.find({
      createdBy: session.user.email.toLowerCase(),
    }).sort({ createdAt: -1 });

    return Response.json(forms);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}