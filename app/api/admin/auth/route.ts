import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "Both fields are required",
        status: 400,
      });
    }

    if (
      email !== process.env.LOGIN_EMAIL ||
      password !== process.env.LOGIN_PASSWORD
    ) {
      return NextResponse.json({
        success: false,
        message: "Invalid email or password",
        status: 401,
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    });

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      token,
      status: 200,
    });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 2 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      success: false,
      message: errorMessage,
      status: 500,
    });
  }
}
