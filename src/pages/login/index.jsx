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

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../components/Form/Schemas/loginSchema";

export const Login = () => {
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
          localStorage.token = JSON.stringify(response.data.token);
          localStorage.userId = JSON.stringify(response.data.user.id);
          navigate("dashboard");
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
