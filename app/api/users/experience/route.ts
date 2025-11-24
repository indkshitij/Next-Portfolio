import { NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ExperienceModel from "@/models/experienceModal";

export async function GET() {
  await connectDB();

  try {
    const experiences = await ExperienceModel.find().sort({ startDate: -1 });

    if (!experiences) {
      return NextResponse.json({
        success: false,
        message: "Experience not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, experiences, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
