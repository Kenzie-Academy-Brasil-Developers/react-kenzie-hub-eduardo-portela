import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({
  labelName,
  labelText,
  placeholder,
  type,
  register,
  disable,
}) => {
  return (
    <>
      <label htmlFor={labelName}>{labelText}</label>
      <input
        disabled={disable}
        required
        placeholder={placeholder}
        name={labelName}
        type={type}
        {...register}
      />
    </>
  );
};
