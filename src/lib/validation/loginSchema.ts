import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  login: yup.string().required("Login obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha obrigatória"),
});

export type TypeLoginSchema = yup.InferType<typeof LoginSchema>;
