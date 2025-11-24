import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ExperienceModel from "@/models/experienceModal";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;
    const body = await req.json();

    const {
      jobTitle,
      companyName,
      description,
      startDate,
      endDate,
      isPresent,
    } = body;

    if (!jobTitle || !companyName || !description || !startDate) {
      return NextResponse.json({
        success: false,
        message: "Required fields are missing.",
        status: 400,
      });
    }

    const updated = await ExperienceModel.findByIdAndUpdate(
      id,
      { jobTitle, companyName, description, startDate, endDate, isPresent },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({
        success: false,
        message: "Experience not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Experience updated successfully",
      experience: updated,
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

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const deleted = await ExperienceModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({
        success: false,
        message: "Experience not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Experience deleted successfully",
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
