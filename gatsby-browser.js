
import React from "react";
import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

export const wrapPageElement = ({ element }) => {
  return <EuiProvider colorMode="light">{element}</EuiProvider>;
};
