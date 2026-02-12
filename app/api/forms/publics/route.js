import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";
export async function GET() {
  try {
    await connectDB();
const forms = await Form.find({
      $or: [{ isPublic: true }, { isPublished: true }],
    })

    return Response.json(forms);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}