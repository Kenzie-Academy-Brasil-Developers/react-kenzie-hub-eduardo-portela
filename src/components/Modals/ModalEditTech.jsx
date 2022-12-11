import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { EditTechSchema } from "../Form/Schemas/EditTechSchema";
import { Input } from "../Input";
import { ModalContext } from "../Modal";

export const ModalEditTech = () => {
  const { closeEditModal, modalEditIsOpen } = useContext(ModalContext);
  const { editTechSubmit } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditTechSchema),
    mode: "onBlur",
    defaultValues: {
      title: "Alhoha",
    },
  });
  return (
    <ReactModal
      isOpen={modalEditIsOpen}
      onRequestClose={closeEditModal}
      contentLabel="Example Modal"
      overlayClassName={"modalOverlay"}
      className="modalContent"
    >
      <div className="modalHeader">
        <h4 className="title">Tecnologia detalhes</h4>
        <Button text={"X"} type={"button"} callback={closeEditModal} />
      </div>
      <Form callback={handleSubmit(editTechSubmit)}>
        <Input
          disable={true}
          type={"text"}
          labelName={"name"}
          labelText={"Nome do Projeto"}
          placeholder={"Tech"}
        />
        <label htmlFor="nivel">Status</label>
        <select name="nivel" id="selectNivel" {...register("status")}>
          <option value="">Selecione seu nível</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">intermediario</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.status?.message && <p>{errors.status.message}</p>}
        <Button type={"submit"} text={"Salvar Alterações"} />
        {/* <Button
          type={"button"}
          callback={() => deleteTech(getId)}
          text={"excluir"}
        /> */}
      </Form>
    </ReactModal>
  );
};
