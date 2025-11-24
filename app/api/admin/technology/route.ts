import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import TechnologyModel from "@/models/technologyModel";
import cloudinary from "@/lib/backendUtils/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, description, image } = await req.json();

    if (!name || !description || !image) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields",
        status: 400,
      });
    }

    const upload = await cloudinary.uploader.upload(image, {
      folder: "technologies",
    });

    const tech = await TechnologyModel.create({
      name,
      description,
      imageUrl: upload.secure_url,
    });

    return NextResponse.json({
      success: true,
      message: "Technology added",
      technology: tech,
      status: 201,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}
