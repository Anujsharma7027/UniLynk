import { connectDB } from "@/lib/mongodb";
import FormResponse from "@/models/Response"; // renamed to avoid conflict
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    console.log("Session:", session); // DEBUG

    if (!session?.user?.email) {
      return Response.json(
        { error: "Unauthorized — No session email" },
        { status: 401 }
      );
    }

    const { formId, answers } = await req.json();

    console.log("Submit Payload:", formId, answers); // DEBUG

    // ⭐ Prevent duplicate submission
    const existing = await FormResponse.findOne({
      formId,
      userEmail: session.user.email
    });

    if (existing) {
      return Response.json(
        { error: "Already submitted" },
        { status: 400 }
      );
    }

    const newResponse = await FormResponse.create({
      formId,
      userEmail: session.user.email,
      answers,
      submittedAt: new Date()
    });

    return Response.json(newResponse);

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}