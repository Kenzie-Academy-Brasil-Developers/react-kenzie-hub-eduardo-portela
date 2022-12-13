import { createContext } from "react";
import { useState } from "react";

export const ModalContext = createContext({});

export const Modal = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setEditIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openEditModal = () => {
    setEditIsOpen(true);
  };

  const closeEditModal = () => {
    setEditIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        modalEditIsOpen,
        openEditModal,
        closeEditModal,
        setIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
