import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
 email: { type: String, unique: true, required: true },
   password: {
      type: String,
      required: function () {
        return this.provider === "credentials";
      },
      default: null
    },
  img: String,

  provider: String,


  name: String,
  year: String,
  branch: String,
  skill: String,

    profileCompleted: {
    type: Boolean,
    default: false,
  },

});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);