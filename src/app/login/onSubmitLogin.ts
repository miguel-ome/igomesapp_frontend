import { TypeLoginSchema } from "@/lib/validation/loginSchema";
import axios from "axios";

interface ResponseLogin {
  status: number;
  message: string;
}

export const onSubmitLogin = async (data: TypeLoginSchema) => {
  try {
    const { data: responseData } = await axios.post<ResponseLogin>(
      "/api/login",
      data
    );

    // sucesso
    console.log("Login realizado com sucesso:", responseData);
    alert("Login realizado com sucesso!");
    // redireciona, salva token, etc...
  } catch (error: any) {
    if (error.response) {
      // erro de autenticação (401, 400, etc)
      const message = error.response.data.message;
      alert(`Erro: ${message}`);
    } else {
      // erro de rede ou desconhecido
      alert("Erro inesperado. Tente novamente mais tarde.");
    }
  }
};
