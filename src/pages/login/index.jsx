import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { DivLogin } from "./style";
import { Input } from "../../components/Input";
import { Link } from "./style";
import { useForm } from "react-hook-form";
import { api } from "../../services/axiosApi";
import { NotifyError, NotifySucess } from "../../components/Toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const loginSchema = yup.object().shape({
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmitFuncion = async (data) => {
    const loginRequest = async () => {
      try {
        const response = await api.post("sessions", data);
        if (response.data.token) {
          NotifySucess("Login Realizado com sucesso");
          /*Atenção, aqui eu passei o objeto de retorno completo para caso eu precise de outras informações do usuario, eu não esta precisando salvar de um por um no localStorage.*/
          localStorage.userInfo = JSON.stringify(response.data);
          setTimeout(() => {
            navigate("dashboard");
          }, 3000);
        }
      } catch (error) {
        NotifyError(`${error.response.data.message}`);
        console.log(error);
      }
    };
    await loginRequest();
    reset();
  };

  return (
    <DivLogin className="containerMobile">
      <Header />

      <Form callback={handleSubmit(onSubmitFuncion)}>
        <h3>Login</h3>
        <Input
          labelName={"email"}
          labelText={"Email"}
          type={"email"}
          placeholder={"Digite seu email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Input
          labelName={"password"}
          labelText={"Senha"}
          type={"password"}
          placeholder={"Digite sua senha"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Button type={"submit"} text={"Entrar"} />
        <aside>
          <p>Ainda não possui uma conta?</p>
          <Link to={"register"}> Cadastre-se</Link>
        </aside>
      </Form>
    </DivLogin>
  );
};
