import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProjectModel from "@/models/projectModel";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const project = await ProjectModel.findById(id);

    if (!project) {
      return NextResponse.json({
        success: false,
        message: "Project not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      project,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
      status: 500,
    });
  }
}
