import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import api from "@/lib/axios/axios";

interface ResponseDataLogin {
  status: number;
  message: string;
  data: {
    access_token: string;
  };
}

export async function POST(request: Request) {
  try {
    const cookiesStorage = await cookies();
    const formData = await request.json();

    const { data: responseData } = await api.post<ResponseDataLogin>(
      "auth/signIn",
      formData
    );
    const { data, message, status } = responseData;

    cookiesStorage.set("access_token", data.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 dia
      path: "/",
    });

    return NextResponse.json({
      message,
      status,
      access_token: data.access_token,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: error.response.data.statusCode,
      message: error.response.data.message,
    });
  }
}
