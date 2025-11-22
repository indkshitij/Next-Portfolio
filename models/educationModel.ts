import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema(
  {
    degreeName: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    instituteName: { type: String, required: true },
    description: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isPresent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const EducationModel =
  mongoose.models.Education || mongoose.model("Education", educationSchema);

export default EducationModel;
