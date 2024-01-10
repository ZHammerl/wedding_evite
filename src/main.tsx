import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ThemeConfig } from "./theme/theme";
import { AuthProvider } from "@root/context/auth.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeConfig>
  </React.StrictMode>
);
