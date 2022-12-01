import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({
  labelName,
  labelText,
  placeholder,
  type,
  register,
}) => {
  return (
    <>
      <label htmlFor={labelName}>{labelText}</label>
      <input
        required
        placeholder={placeholder}
        name={labelName}
        type={type}
        {...register}
      />
    </>
  );
};
