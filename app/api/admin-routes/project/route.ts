import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProjectModel from "@/models/projectModel";
import cloudinary from "@/lib/backendUtils/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      name,
      description,
      projectLink,
      githubLink,
      inDepthDetail,
      image, 
    } = await req.json();

    if (!name || !description || !image || !githubLink || !inDepthDetail) {
      return NextResponse.json(
        { success: false, message: "All fields are required", status: 400 },
      );
    }

    const cloudinaryUpload = await cloudinary.uploader.upload(image, {
      folder: "project",
    });

    const newProject = new ProjectModel({
      name,
      description,
      projectLink,
      imageUrl: cloudinaryUpload.secure_url,
      githubLink,
      inDepthDetail,
    });

    await newProject.save();

    return NextResponse.json({
      success: true,
      message: "Project created successfully",
      project: newProject,
      status: 201,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
