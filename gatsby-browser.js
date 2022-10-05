import "./src/styles/global.css";
import "@fontsource/poppins";
import "@fontsource/roboto";
import React from "react";
import { MenuProvider } from "./src/context/MenuContext";

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);
