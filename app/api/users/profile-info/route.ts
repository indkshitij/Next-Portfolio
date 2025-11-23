import { NextResponse } from "next/server";
import ProfileInfoModel from "@/models/portfolioInfo";
import connectDB from "@/lib/backendUtils/DatabaseConnection";

export async function GET() {
  await connectDB();

  try {
    const profileData = await ProfileInfoModel.findOne();

    if (!profileData) {
      return NextResponse.json({
        success: false,
        message: "Profile info not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, profileData, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
