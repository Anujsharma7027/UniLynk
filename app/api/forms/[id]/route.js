import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export async function GET(req, context) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    const { id } = await context.params;
    const form = await Form.findById(id);

    if (!form) {
      return Response.json({ error: "Form not found" }, { status: 404 });
    }

      const viewerEmail = session?.user?.email?.toLowerCase();
    const isOwner = Boolean(viewerEmail) && form.createdBy === viewerEmail;
    const isPublicForm = form.isPublic || form.isPublished;

    if (!isPublicForm && !isOwner) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }
    return Response.json(form);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
