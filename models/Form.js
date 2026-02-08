import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  id: String,
  type: String,
  question: String,
  description: String,
  required: Boolean,
  options: [String],
});

const FormSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    genre: String,
    date: String,
    time: String,
    location: String,
    questions: [QuestionSchema],
    isPublic: {
      type: Boolean,
      default: false,
    },
    createdBy: String,
    isPublic: {
      type: Boolean,
      default: false
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date
    },

  },
  { timestamps: true }
);

export default mongoose.models.Form ||
  mongoose.model("Form", FormSchema);
