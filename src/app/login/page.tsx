"use client";

import { LoginSchema, TypeLoginSchema } from "@/lib/validation/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { onSubmitLogin } from "./onSubmitLogin";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLoginSchema>({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <div className="bg-gray-900 w-full h-screen flex flex-col items-center justify-center space-y-10 text-white">
      <h1 className="text-4xl">Login</h1>
      <form
        className="flex flex-col space-y-10 w-4/5 max-w-72"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <div className="flex flex-col space-y-2">
          <input
            {...register("login")}
            className="bg-transparent outline-none border-b-2 border-gray-100 px-2 transition-all duration-300 ease-in-out focus:border-orange-500"
            type="text"
            name="login"
            placeholder="Login"
            required
          />
          {errors.login && (
            <span className="text-red-400 text-sm mt-1">
              {errors.login.message}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <input
            {...register("password")}
            className="bg-transparent outline-none border-b-2 border-gray-100 px-2 transition-all duration-300 ease-in-out focus:border-orange-500"
            type="password"
            name="password"
            placeholder="Senha"
            required
          />
          {errors.password && (
            <span className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 rounded p-1 cursor-pointer transition-all duration-300 ease-in-out"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
