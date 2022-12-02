import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .min(8, "Email deve ter no minimo 8 caracteres")
    .email("É necessario um email válido"),
  password: yup
    .string()
    .required("È necessario um password")
    .min(6, "Senha deve ter no minimo 6 caracteres"),
});
