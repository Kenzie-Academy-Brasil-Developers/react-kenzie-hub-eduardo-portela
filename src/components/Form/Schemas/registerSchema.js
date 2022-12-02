import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(5, "Nome deve ter ao menos 5 caracteres")
    .max(30, "O nome deve ter no máximo 30 caracteres"),
  email: yup
    .string()
    .required("Email é obrigatório ")
    .email("O email tem que ser válido"),
  password: yup
    .string()
    .required("A senha é Obrigatória")
    .min(6, "Pelo Menos 6 Caracteres")
    .matches(/(?=.*?[A-Z])/, "Pelo Menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um numero")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Pelo menos um caracter especial"),
  confirmPassword: yup
    .string()
    .required("Confirmar a senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas deve ser iguais"),
  bio: yup
    .string()
    .required("Bio é obrigatório")
    .min(6, "Deve conter ao menos 6 caracteres"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string().required("Escolha um módulo"),
});
