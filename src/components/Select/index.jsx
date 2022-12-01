import React from "react";

export const ModuleSelect = ({ register }) => {
  return (
    <>
      <label htmlFor="course_module">Selecionar modulo</label>
      <select name="" id="" {...register}>
        <option value="">Selecione um módulo</option>
        <option value="Primeiro Módulo (Front-end Basico)">
          Primeiro módulo
        </option>
        <option value="Segundo Módulo (Front-end Intermediário)">
          Segundo módulo
        </option>
        <option value="Terceiro Módulo (Front-end Avançado)">
          Terceiro módulo
        </option>
        <option value="Quarto Módulo (Back-end Basico)">Quarto módulo</option>
        <option value="Quinto Módulo (Back-end Intemediário)">
          Quinto módulo
        </option>
        <option value="Sexto Módulo (Back-end Avançado)">Sexto módulo</option>
      </select>
    </>
  );
};
