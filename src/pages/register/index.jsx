import React from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ModuleSelect } from "../../components/Select";
import { DivFormTitle, Link } from "./style";
import { useForm } from "react-hook-form";
import { api } from "../../services/axiosApi";
import { NotifyError, NotifySucess } from "../../components/Toastify";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../components/Form/Schemas/registerSchema";

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmitFunction = async (data) => {
    try {
      const response = await api.post("users", data);
      if (response.data.id) {
        NotifySucess("Cadastro realizado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      NotifyError(`${error.response.data.message}`);
      console.log(error);
    }
    reset();
  };

  return (
    <div className="containerMobile">
      <Header>
        <Link to="/">Voltar</Link>
      </Header>
      <Form callback={handleSubmit(onSubmitFunction)}>
        <DivFormTitle>
          <h3>Crie sua conta</h3>
          <span>Rápido e grátis, vamos nessa</span>
        </DivFormTitle>
        <Input
          labelName={"name"}
          labelText={"Nome"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          register={register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <Input
          labelName={"email"}
          labelText={"Email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <Input
          labelName={"password"}
          labelText={"Senha"}
          type={"password"}
          placeholder={"Digite aqui seu senha"}
          register={register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <Input
          labelName={"confirmPassword"}
          labelText={"Confirmar senha"}
          type={"password"}
          placeholder={"Confirme sua senha "}
          register={register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword.message}</p>
        )}
        <Input
          labelName={"bio"}
          labelText={"Bio"}
          type={"text"}
          placeholder={"Fale sobre você "}
          register={register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}
        <Input
          labelName={"contact"}
          labelText={"Contato"}
          type={"text"}
          placeholder={"Opção de contato "}
          register={register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}
        <ModuleSelect register={register("course_module")} />
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}
        <Button type={"submit"} text={"Cadastrar"} />
      </Form>
    </div>
  );
};
