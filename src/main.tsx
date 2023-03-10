import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ThemeConfig } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>
);
