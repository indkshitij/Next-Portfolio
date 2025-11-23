import { NextResponse } from "next/server";
import EducationModel from "@/models/educationModel";
import connectDB from "@/lib/backendUtils/DatabaseConnection";

export async function GET() {
  await connectDB();

  try {
    const educations = await EducationModel.find().sort({ startDate: -1 });

    if (!educations) {
      return NextResponse.json({
        success: false,
        message: "Education not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, educations, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
