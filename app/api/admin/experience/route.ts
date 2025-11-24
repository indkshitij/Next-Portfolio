import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ExperienceModel from "@/models/experienceModal";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const {
      jobTitle,
      companyName,
      description,
      startDate,
      endDate,
      isPresent,
    } = await req.json();

    if (!jobTitle || !companyName || !description || !startDate) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields",
        status: 400,
      });
    }

    if (!isPresent && !endDate) {
      return NextResponse.json({
        success: false,
        message: "End date required unless currently working",
        status: 400,
      });
    }

    const experience = await ExperienceModel.create({
      jobTitle,
      companyName,
      description,
      startDate,
      endDate: isPresent ? null : endDate,
      isPresent,
    });

    return NextResponse.json({
      success: true,
      message: "Experience created",
      experience,
      status: 201,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}
