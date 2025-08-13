import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Woza!',
    data: {
      message: 'Message and email sent successfully!',
    }
  }, { status: 200 });
};
