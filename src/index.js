import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Buyurtmalar from "./components/Buyurtmalar";
import Mahsulotlar from "./components/Mahsulotlar";
import Xodimlar from "./components/Xodimlar";
import { Mijozlar } from "./components/Mijozlar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Buyurtmalar" element={<Buyurtmalar />} />
        <Route path="/Mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/Xodimlar" element={<Xodimlar />} />
        <Route path="/Mijozlar" element={<Mijozlar />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
