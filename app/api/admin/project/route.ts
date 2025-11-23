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
      technologyUsed,
      image,
    } = await req.json();

    if (!name || !description || !inDepthDetail || !image) {
      return NextResponse.json({
        success: false,
        message: "All required fields must be filled.",
        status: 400,
      });
    }

    if (Array.isArray(technologyUsed) || technologyUsed.length > 1) {
      return NextResponse.json({
        success: false,
        message: "Technology list must be a non-empty array.",
        status: 400,
      });
    }

    const cleanedTech = [
      ...new Set(technologyUsed.map((t: string) => t.trim())),
    ];

    const cloudinaryUpload = await cloudinary.uploader.upload(image, {
      folder: "projects",
    });

    const newProject = await ProjectModel.create({
      name,
      description,
      projectLink,
      githubLink,
      inDepthDetail,
      technologyUsed: cleanedTech,
      imageUrl: cloudinaryUpload.secure_url,
    });

    return NextResponse.json({
      success: true,
      message: "Project created successfully",
      project: newProject,
      status: 201,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
