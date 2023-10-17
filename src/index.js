import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "sans-serif",
      },
    },
  },
  colors: {
    grey: "#CCCCCC",
    blue: "#3498db",
    steel: "#B0C4DE",
    dodge: "#1e90ff",
  },
  components: {
    Button: {
      padding: "5px",
      "border-radius": "10px",
      "box-shadow": "1px 2px 3px dodgerblue",
    },
    Stepper: {
      indicator: {
        borderRadius: 0,
      },
    },
    List: {
      padding: "10px",
      margin: "10px",
    },
    Headers: {
      fontFamily: "monospace",
    },
    Menu: {
      colors: {
        steel: "#B0C4DE",
        dodge: "#1e90ff",
      },
    },
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "monospace",
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

reportWebVitals();
