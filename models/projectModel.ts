import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    projectLink: { type: String },
    githubLink: { type: String },
    imageUrl: { type: String },
    inDepthDetail: { type: String },
    description: { type: String, required: true },
    technologyUsed: { type: [String], default: [] },
  },
  { timestamps: true }
);

const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default ProjectModel;
