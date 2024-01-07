import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* 👇 Below script is needed for perfect theme sync with local-storage of browser as Chakra UI stores theme there.*/}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />{" "}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
