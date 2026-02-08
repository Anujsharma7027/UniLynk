import { connectDB } from "@/lib/mongodb";
import ResponseModel from "@/models/Response";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ applied: false });
    }

    const userEmail = session.user.email;

    const { searchParams } = new URL(req.url);
    const formId = searchParams.get("formId");

    const exists = await ResponseModel.findOne({
      formId,
      userEmail
    });

    return Response.json({ applied: !!exists });

  } catch (error) {
    console.error(error);
    return Response.json({ applied: false });
  }
}