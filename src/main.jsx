import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Rendern der React App im index.html bei dem Element mit id="root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
