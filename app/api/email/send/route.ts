import { NextResponse } from "next/server";
import { ContactEmail } from "@/lib/Email/ContactEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "Your Website <onboarding@resend.dev>",
      to: "ind.kshitijsingh@gmail.com",
      subject: `New Message from ${name} – ${subject}`,
      react: ContactEmail({ name, email, subject, message }),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent",
      status: 200,
    });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed",
      status: 500,
    });
  }
}
