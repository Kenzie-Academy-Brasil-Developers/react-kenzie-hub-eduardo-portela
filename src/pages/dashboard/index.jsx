import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { DivHeader, DivMain, DivSubHeader } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthLogin } from "../../contexts/AuthLogin";
import { CardTech } from "../../components/CardTech";
import { Modal } from "../../components/Modal";
import { TechProvider } from "../../contexts/TechContext";

export const Dashboard = () => {
  const { userInfo, loading } = useContext(AuthLogin);

  if (loading) {
    return <h1 className="loading"></h1>;
  }

  if (!localStorage.token) {
    console.log(localStorage.token);
    navigate("/");
  }

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  return userInfo ? (
    <>
      <DivHeader>
        <div className="containerMobile">
          <Header>
            <Button callback={logout} type={"button"} text={"Sair"} />
          </Header>
        </div>
      </DivHeader>
      <DivSubHeader>
        <div className="containerMobile">
          <h3>Olá, {userInfo && userInfo.name}</h3>
          <p>{userInfo && userInfo.course_module}</p>
        </div>
      </DivSubHeader>
      <DivMain>
        <div className="containerMobile">
          <Modal>
            <TechProvider>
              <CardTech />
            </TechProvider>
          </Modal>
        </div>
      </DivMain>
    </>
  ) : (
    <Navigate to="/" />
  );
};
