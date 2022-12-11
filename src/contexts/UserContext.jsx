import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotifyError, NotifySucess } from "../components/Toastify";
import { AiOutlineLoading } from "react-icons/ai";

import { api } from "../services/axiosApi";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  //Função register
  const onSubmitFunctionRegister = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      console.log(response);
      if (response.data.id) {
        NotifySucess("Cadastro realizado com sucesso!");
        if (loading) {
          <AiOutlineLoading3Quarters />;
        }
        navigate("/");
      }
    } catch (error) {
      NotifyError(`${error.response.data.message}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
    //reset();
  };

  return (
    <UserContext.Provider
      value={{ onSubmitFunctionRegister, userInfo, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
