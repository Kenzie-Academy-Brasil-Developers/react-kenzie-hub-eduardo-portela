import React from "react";

export const Button = ({ type, text, callback }) => {
  return (
    <>
      <button type={type} onClick={callback}>
        {text}
      </button>
    </>
  );
};
