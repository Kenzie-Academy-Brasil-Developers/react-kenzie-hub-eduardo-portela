import * as yup from "yup";

export const AddTechSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome é obrigatório")
    .min(2, " Deve ter no minimo 2 caracteres")
    .max(15, "Deve ter no maximo 15 caracteres"),
  status: yup.string().required("È necessario selecionar um nivel"),
});
