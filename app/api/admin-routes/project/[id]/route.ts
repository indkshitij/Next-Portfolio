import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProjectModel from "@/models/projectModel";
import cloudinary from "@/lib/backendUtils/cloudinary";
import { getPublicIdFromUrl } from "@/lib/backendUtils/helperFunction";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { name, description, projectLink, githubLink, inDepthDetail, image } =
      await req.json();

    if (!name || !description || !githubLink || !inDepthDetail) {
      return NextResponse.json({
        success: false,
        message: "All fields except image are required",
        status: 400,
      });
    }

    const existingProject = await ProjectModel.findById(params.id);
    if (!existingProject) {
      return NextResponse.json({
        success: false,
        message: "Project not found",
        status: 404,
      });
    }

    let imageUrl = existingProject.imageUrl;

    if (image) {
      const publicId = getPublicIdFromUrl(existingProject.imageUrl);
      await cloudinary.uploader.destroy(publicId);

      const cloudinaryUpload = await cloudinary.uploader.upload(image, {
        folder: "project",
      });
      imageUrl = cloudinaryUpload.secure_url;
    }

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      params.id,
      {
        name,
        description,
        projectLink,
        githubLink,
        inDepthDetail,
        imageUrl,
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
      status: 200,
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

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const deletedProject = await ProjectModel.findByIdAndDelete(params.id);

    if (deletedProject?.imageUrl) {
      const publicId = getPublicIdFromUrl(deletedProject.imageUrl);
      await cloudinary.uploader.destroy(publicId);
    }

    if (!deletedProject) {
      return NextResponse.json({
        success: false,
        message: "Project not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
      project: deletedProject,
      status: 200,
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
