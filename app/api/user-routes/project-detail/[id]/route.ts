import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ProjectModel from "@/models/projectModel";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = params;

  try {
    const project = await ProjectModel.findById(id);
    
    if (!project) {
      return NextResponse.json({
        success: false,
        message: "Project not found",
        status: 404,
      });
    }

    return NextResponse.json({ success: true, project, status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
