import React, { useState } from "react";
import { Button } from "../Button";
import { HeaderList, ListCardTech, TechCard } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthLogin } from "../../contexts/AuthLogin";
import { ModalContext } from "../Modal";
import ReactModal from "react-modal";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { Form } from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddTechSchema } from "../Form/Schemas/AddTechSchema";
import { TechContext } from "../../contexts/TechContext";
import { useEffect } from "react";
import { ModalAddTech } from "../Modals/ModalAddTech";
import { ModalEditTech } from "../Modals/ModalEditTech";

ReactModal.setAppElement("#root");

export const CardTech = () => {
  const { userInfo } = useContext(AuthLogin);
  const { newTech, loading, setNewTech } = useContext(TechContext);
  const { modalIsOpen, closeModal, openModal, openEditModal } =
    useContext(ModalContext);
  const { onSubmitAddTech, deleteTech, editTechSubmit, setId } =
    useContext(TechContext);
  const [inputValue, setInputValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AddTechSchema),
    mode: "onBlur",
  });

  if (loading) {
    <h1 className="loading"></h1>;
  }

  return (
    <>
      <ModalAddTech
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        onSubmitAddTech={onSubmitAddTech}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        reset={reset}
      />

      <ModalEditTech inputValue={inputValue} />
      <HeaderList>
        <h3>Tecnologias</h3>
        <Button text={"+"} type={"button"} callback={openModal} />
      </HeaderList>
      {newTech && (
        <ListCardTech
          onClick={(event) => setInputValue(event.target.innerText)}
        >
          {newTech.map(({ id, title, status }) => (
            <TechCard key={id} onClick={() => setId(id)}>
              <p onClick={openEditModal}>{title}</p>
              <div>
                <p>{status}</p>
                <Button text={<FaTrashAlt />} callback={() => deleteTech(id)} />
              </div>
            </TechCard>
          ))}
        </ListCardTech>
      )}
    </>
  );
};
