import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";

export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const form = await Form.findById(id);

    if (!form) {
      return Response.json({ error: "Form not found" }, { status: 404 });
    }

    return Response.json(form);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
