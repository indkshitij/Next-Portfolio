import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/backendUtils/DatabaseConnection";
import ContactModel from "@/models/contact";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        message: "Missing fields",
        status: 400,
      });
    }

    await ContactModel.create({ name, email, subject, message });

    return NextResponse.json({ success: true, message: "Message sent" });
 } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
