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
          <Route path="klimawissen" element={<Facts />} />
          <Route path="klimakipppunkte" element={<Kippp />} />
          <Route path="wochenchallenge" element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
