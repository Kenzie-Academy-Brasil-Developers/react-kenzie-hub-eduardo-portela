import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { DivLogin } from "./style";
import { Input } from "../../components/Input";
import { Link } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../components/Form/Schemas/loginSchema";
import { AuthLogin } from "../../contexts/AuthLogin";

export const Login = () => {
  const { loginRequest } = useContext(AuthLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <DivLogin className="containerMobile">
      <Header />

      <Form callback={handleSubmit(loginRequest)}>
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
