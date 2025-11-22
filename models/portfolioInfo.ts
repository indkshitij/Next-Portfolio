import mongoose, { Schema } from "mongoose";

const profileInfoSchema = new Schema(
  {
    name: { type: String, required: true },
    heading: { type: String, required: true },
    about: { type: String, required: true },
    image: { type: String },
    statistics: [
      {
        name: { type: String },
        number: { type: Number },
      },
    ],
    socials: {
      github: { type: String, default: "" },
      leetcode: { type: String, default: "" },
      instagram: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      email: { type: String, default: "" },
      linktree: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const ProfileInfoModel =
  mongoose.models.ProfileInfo ||
  mongoose.model("ProfileInfo", profileInfoSchema);

export default ProfileInfoModel;
