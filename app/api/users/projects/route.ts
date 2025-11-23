import { NextResponse } from "next/server";
import ProjectModel from "@/models/projectModel";
import connectDB from "@/lib/backendUtils/DatabaseConnection";

export async function GET() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().sort({ createdAt: -1 });

    if (!projects) {
      return NextResponse.json({
        success: false,
        message: "Project not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, projects, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
