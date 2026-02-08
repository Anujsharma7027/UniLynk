import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({

  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true
  },

  userEmail: {
    type: String,
    required: true
  },

  answers: {
    type: Object,
    required: true
  },

  submittedAt: {
    type: Date,
    default: Date.now
  }

});

// ⭐ Prevent duplicate submissions
ResponseSchema.index(
  { formId: 1, userEmail: 1 },
  { unique: true }
);

export default mongoose.models.Response ||
mongoose.model("Response", ResponseSchema);