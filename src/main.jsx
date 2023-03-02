import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PassProvider } from "./hooks/usePass";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PassProvider>
      <App />
    </PassProvider>
  </React.StrictMode>
);
