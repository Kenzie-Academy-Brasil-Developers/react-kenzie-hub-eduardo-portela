import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { api } from "../../services/axiosApi";
import { DivHeader, DivMain, DivSubHeader } from "./style";

export const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getIdLocalStorage = JSON.parse(localStorage.userInfo);
    const idUser = getIdLocalStorage.user.id;
    const getInfoUser = async () => {
      try {
        const response = await api.get(`users/${idUser}`);
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoUser();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const isTokenExist = localStorage.userInfo;
    if (!isTokenExist) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
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
          <h3>Que pena! Estamos em desenvolvimento :{"("}</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades!
          </p>
        </div>
      </DivMain>
    </>
  );
};
