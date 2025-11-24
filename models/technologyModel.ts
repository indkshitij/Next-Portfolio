import mongoose, { Schema } from "mongoose";

const technologySchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const TechnologyModel =
  mongoose.models.Technology || mongoose.model("Technology", technologySchema);

export default TechnologyModel;
