import React, { Children } from "react";
import { Forms } from "./style";

export const Form = ({ callback, children }) => {
  return <Forms onSubmit={callback}>{children}</Forms>;
};
