import axios from "axios";
import { cookies } from "next/headers";

// Função para pegar o token do cookie
const getTokenFromCookie = async () => {
  const cookieStorage = cookies();
  const access_token = (await cookieStorage).get("access_token")?.value;
  return access_token || null;
};

// Criação da instância do Axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptar e adicionar o token ao header Authorization
api.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromCookie();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
