import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import EducationModel from "@/models/educationModel";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const {
      degreeName,
      fieldOfStudy,
      instituteName,
      description,
      startDate,
      endDate,
      isPresent,
    } = await req.json();

    if (
      !degreeName ||
      !fieldOfStudy ||
      !instituteName ||
      !description ||
      !startDate
    ) {
      return NextResponse.json({
        success: false,
        message: "All required fields must be filled",
        status: 400,
      });
    }

    if (!isPresent && !endDate) {
      return NextResponse.json({
        success: false,
        message: "End date is required unless currently studying",
        status: 400,
      });
    }

    const newEducation = new EducationModel({
      degreeName,
      fieldOfStudy,
      instituteName,
      description,
      startDate,
      endDate: isPresent ? null : endDate,
      isPresent,
    });

    await newEducation.save();

    return NextResponse.json({
      success: true,
      message: "Education created",
      newEducation,
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
