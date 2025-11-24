import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import TechnologyModel from "@/models/technologyModel";
import cloudinary from "@/lib/backendUtils/cloudinary";
import { getPublicIdFromUrl } from "@/lib/backendUtils/helperFunction";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { name, description, image } = await req.json();
    const { id } = await context.params;
    const tech = await TechnologyModel.findById(id);
    if (!tech) {
      return NextResponse.json({
        success: false,
        message: "Technology not found",
        status: 404,
      });
    }

    if (image) {
      const publicId = getPublicIdFromUrl(tech.imageUrl);
      await cloudinary.uploader.destroy(publicId);

      const upload = await cloudinary.uploader.upload(image, {
        folder: "technologies",
      });

      tech.imageUrl = upload.secure_url;
    }

    tech.name = name || tech.name;
    tech.description = description || tech.description;
    await tech.save();

    return NextResponse.json({
      success: true,
      message: "Updated successfully",
      technology: tech,
      status: 200,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await context.params;
    const tech = await TechnologyModel.findByIdAndDelete(id);

    if (!tech) {
      return NextResponse.json({
        success: false,
        message: "Technology not found",
        status: 404,
      });
    }

    if (tech.imageUrl) {
      const publicId = getPublicIdFromUrl(tech.imageUrl);
      await cloudinary.uploader.destroy(publicId);
    }

    return NextResponse.json({
      success: true,
      message: "Technology deleted",
      status: 200,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}
