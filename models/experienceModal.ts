import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema(
  {
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    description: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isPresent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ExperienceModel =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default ExperienceModel;
