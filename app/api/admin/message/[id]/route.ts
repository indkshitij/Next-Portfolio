import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ContactModel from "@/models/contact";

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const contact = await ContactModel.findByIdAndDelete(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, message: "Messages not found", status: 404 },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message Deleted",
      status: 200,
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
