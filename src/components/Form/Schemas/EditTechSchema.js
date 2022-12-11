import * as yup from "yup";

export const EditTechSchema = yup.object().shape({
  status: yup.string().required("È necessario selecionar um nivel"),
});
