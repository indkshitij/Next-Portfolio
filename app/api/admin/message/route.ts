import { NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ContactModel from "@/models/contact";

export async function GET() {
  try {
    await connectDB();

    const contact = await ContactModel.find();

    if (!contact || contact.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Messages not found",
        status: 404,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Fetched successfully",
      messageData: contact,
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
