import React from "react";
import ReactModal from "react-modal";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";

export const ModalAddTech = ({
  modalIsOpen,
  closeModal,
  onSubmitAddTech,
  handleSubmit,
  register,
  errors,
  reset,
}) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName={"modalOverlay"}
      className="modalContent"
    >
      <div className="modalHeader">
        <h4 className="title">Cadastrar Tecnologia</h4>
        <Button text={"X"} type={"button"} callback={closeModal} />
      </div>
      <Form callback={handleSubmit(onSubmitAddTech)}>
        <Input
          type={"text"}
          labelName={"name"}
          labelText={"Nome"}
          placeholder={"Nome da tecnologia"}
          register={register("title")}
        />
        {errors.title?.message && <p>{errors.title.message}</p>}
        <label htmlFor="nivel">Selecione o nível</label>
        <select name="nivel" id="selectNivel" {...register("status")}>
          <option value="">Selecione seu nível</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">intermediario</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message && <p>{errors.status.message}</p>}
        <Button type={"submit"} text={"Cadastrar tecnologia"} />
      </Form>
    </ReactModal>
  );
};
