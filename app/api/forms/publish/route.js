import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { formId } = await req.json();

    if (!formId) {
      return Response.json(
        { error: "Form ID is required" },
        { status: 400 }
      );
    }

    const updatedForm = await Form.findOneAndUpdate(
      {
        _id: formId,
        createdBy: session.user.email.toLowerCase(),
      },
      {
        isPublic: true,
        isPublished: true,
        publishedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedForm) {
      return Response.json(
        { error: "Form not found" },
        { status: 404 }
      );
    }

    return Response.json(updatedForm);

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to publish form" },
      { status: 500 }
    );
  }
}
