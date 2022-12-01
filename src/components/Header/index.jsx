import React from "react";
import { Headers } from "./style";

export const Header = ({ children }) => {
  return (
    <Headers>
      <h1>Kenzie Hub</h1>
      {children}
    </Headers>
  );
};
