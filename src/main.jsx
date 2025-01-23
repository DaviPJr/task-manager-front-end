import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, Zoom } from "react-toastify";

import "./index.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
    />
    <App />
  </StrictMode>
);
