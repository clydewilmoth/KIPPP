import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import Kippp from "./pages/Kippp/Kippp";
import Challenge from "./pages/Challenge/Challenge";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="facts" element={<Facts />} />
          <Route path="kippp" element={<Kippp />} />
          <Route path="challenge" element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
