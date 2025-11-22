import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ExperienceModel from "@/models/experienceModal";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const updated = await ExperienceModel.findByIdAndUpdate(
      params.id,
      {
        jobTitle,
        companyName,
        description,
        startDate,
        endDate,
        isPresent,
      },
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
      message: "Experience updated",
      experience: updated,
      status: 200,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deleted = await ExperienceModel.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Experience not found", status: 404 },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Experience deleted", status: 200 },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message, status: 500 });
  }
}
