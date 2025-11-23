import { NextResponse } from "next/server";
import TechnologyModel from "@/models/technologyModel";
import connectDB from "@/lib/backendUtils/DatabaseConnection";

export async function GET() {
  await connectDB();

  try {
    const technologies = await TechnologyModel.find().sort({ createdAt: 1 });

    if (!technologies) {
      return NextResponse.json({
        success: false,
        message: "Technology not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, technologies, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
