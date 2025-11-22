import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProfileInfoModel from "@/models/portfolioInfo";
import cloudinary from "@/lib/backendUtils/cloudinary";
import { getPublicIdFromUrl } from "@/lib/backendUtils/helperFunction";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, heading, about, statistics, socials, image } = body;

    if (!name || !heading || !about || !statistics || !socials) {
      return NextResponse.json({
        success: false,
        message: "All fields (except image) are required",
        status: 400,
      });
    }

    let existingProfileInfo = await ProfileInfoModel.findOne({});
    if (!existingProfileInfo) {
      existingProfileInfo = new ProfileInfoModel();
    }

    let imageUrl: string | undefined = existingProfileInfo.image;

    if (image) {
      try {
        if (existingProfileInfo.image) {
          const publicId = getPublicIdFromUrl(existingProfileInfo.image);
          await cloudinary.uploader.destroy(publicId);
        }

        const uploadResult = await cloudinary.uploader.upload(image, {
          folder: "profileInfo",
          timeout: 60000,
        });

        imageUrl = uploadResult.secure_url;
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        return NextResponse.json({
          success: false,
          message: errorMessage,
          status: 500,
        });
      }
    }

    const updateData = {
      name,
      heading,
      about,
      statistics,
      socials: {
        github: socials.github,
        leetcode: socials.leetcode,
        instagram: socials.instagram,
        linkedin: socials.linkedin,
        email: socials.email,
        linktree: socials.linktree,
      },
      image: imageUrl,
    };

    const updatedData = await ProfileInfoModel.findOneAndUpdate(
      {},
      updateData,
      { new: true, upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Updated Successfully",
      data: updatedData,
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
