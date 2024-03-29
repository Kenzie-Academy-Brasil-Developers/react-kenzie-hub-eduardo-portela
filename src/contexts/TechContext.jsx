import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../components/Modal";
import { NotifyError, NotifySucess } from "../components/Toastify";
import { api } from "../services/axiosApi";
import { AuthLogin } from "./AuthLogin";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { userInfo, setUserInfo } = useContext(AuthLogin);
  const [newTech, setNewTech] = useState(userInfo.techs);
  const [loading, setLoading] = useState(true);
  const [getId, setId] = useState("");
  const { closeModal, closeEditModal } = useContext(ModalContext);

  const token = JSON.parse(localStorage.getItem("token"));
  const onSubmitAddTech = async (data) => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          authorization: `Bearer: ${token}`,
        },
      });
      response.status == 201 && setNewTech([...newTech, response.data]);
      NotifySucess("Tecnologia Cadastrada com sucesso");
    } catch (error) {
      NotifyError(error.response.data.message);
    } finally {
      setLoading(false);
      closeModal();
    }
  };
  const deleteTech = async (techId) => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      response.status == 204 && setNewTech([...userInfo.techs, ...newTech]),
        NotifySucess("Tecnologia Deletada com sucesso");
    } catch (error) {
      NotifyError(error.response.data.message);
    } finally {
      setLoading(false);
      setNewTech([...newTech]);
    }

    const filterTechs = newTech.filter((tech) => {
      return tech.id !== techId;
    });

    setNewTech([...filterTechs]);
  };

  const editTechSubmit = async (data) => {
    try {
      const response = await api.put(`/users/techs/${getId}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        NotifySucess(`Nível de ${response.data.title} atualizado com sucesso`);

        const filterTechs = newTech.filter((tech) => {
          return tech.id !== response.data.id;
        });
        setNewTech([...filterTechs, response.data]);
      }
    } catch (error) {
      NotifyError(error.response.data.message);
    } finally {
      setLoading(false);
      closeEditModal();
    }
  };
  return (
    <TechContext.Provider
      value={{
        onSubmitAddTech,
        deleteTech,
        newTech,
        loading,
        setNewTech,
        editTechSubmit,
        setId,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
