import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

interface ResponseDataLogin {
  status: number;
  message: string;
  data: {
    access_token: string;
  };
}

export async function POST(request: Request) {
  const cookiesStorage = await cookies();
  const formData = await request.json();
  const { login, password } = formData;

  const { data: responseData } = await axios.post<ResponseDataLogin>(
    "http://localhost:3000/auth/signIn",
    {
      login,
      password,
    }
  );

  const { status, message, data } = responseData;
  if (status < 200 || status >= 300) {
    // Se o status não for 2xx, retorna a mensagem de erro
    return NextResponse.json({ message }, { status });
  }

  cookiesStorage.set("access_token", data.access_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 dia
    path: "/",
  });

  return NextResponse.json({
    message: "Login realizado com sucesso!",
    access_token: data.access_token,
  });
}
