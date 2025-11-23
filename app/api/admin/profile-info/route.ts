import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProfileInfoModel from "@/models/portfolioInfo";
import cloudinary from "@/lib/backendUtils/cloudinary";
import { getPublicIdFromUrl } from "@/lib/backendUtils/helperFunction";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, heading, about, statistics, socials, image, resume } = body;

    if (!name || !heading || !about || !statistics || !socials) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields except image and resume are required.",
          status: 400,
        },
      );
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
          if (publicId) await cloudinary.uploader.destroy(publicId);
        }

        const uploadResult = await cloudinary.uploader.upload(image, {
          folder: "profileInfo",
          timeout: 60000,
        });

        imageUrl = uploadResult.secure_url;
      } catch (error: unknown) {
        return NextResponse.json({
          success: false,
          message:
            error instanceof Error ? error.message : "Image upload failed",
          status: 500,
        });
      }
    }

    let resumeUrl: string | undefined = existingProfileInfo.resume;

    if (resume) {
      try {
        if (existingProfileInfo.resume) {
          const publicId = getPublicIdFromUrl(existingProfileInfo.resume);
          if (publicId) await cloudinary.uploader.destroy(publicId);
        }

        const resumeUpload = await cloudinary.uploader.upload(resume, {
          resource_type: "raw", 
          folder: "resume",
          timeout: 60000,
        });

        resumeUrl = resumeUpload.secure_url;
      } catch (error: unknown) {
        return NextResponse.json({
          success: false,
          message:
            error instanceof Error ? error.message : "Resume upload failed",
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
      resume: resumeUrl,
    };

    const updatedData = await ProfileInfoModel.findOneAndUpdate(
      {},
      updateData,
      { new: true, upsert: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully 🎉",
        data: updatedData,
        status: 200,
      },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Update failed",
        status: 500,
      },
    );
  }
}
