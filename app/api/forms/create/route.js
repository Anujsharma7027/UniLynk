import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const form = await Form.create(data);

    return Response.json(form);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
