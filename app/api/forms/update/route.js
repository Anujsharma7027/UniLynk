import { connectDB } from "@/lib/mongodb";
import Form from "@/models/Form";

export async function PUT(req) {
  try {
    await connectDB();

    const { formId, formData } = await req.json();

    if (!formId) {
      return Response.json(
        { error: "Missing formId" },
        { status: 400 }
      );
    }

    const updatedForm = await Form.findByIdAndUpdate(formId, formData, {
      new: true,
      runValidators: true
    });

    return Response.json(updatedForm);

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}