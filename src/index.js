import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Buyurtmalar from "./components/Buyurtmalar";
import Mahsulotlar from "./components/Mahsulotlar";
import Xodimlar from "./components/Xodimlar";
import { Mijozlar } from "./components/Mijozlar";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import { MyTest } from "./components/MyTest";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="nav-container">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
              fontFamily: "monospace",
              fontSize: "16px",
            };
          }}
          className="nav-link"
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
              fontFamily: "monospace",
              fontSize: "16px",
            };
          }}
          className="nav-link"
          to={"/mytest"}
        >
          MyTest
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
              fontFamily: "monospace",
              fontSize: "16px",
            };
          }}
          className="nav-link"
          to={"/xodimalar"}
        >
          Xodimlar
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
              fontFamily: "monospace",
              fontSize: "16px",
            };
          }}
          className="nav-link"
          to={"*"}
        >
          Not Fund Page
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/mytest" element={<MyTest />} />
        <Route path="/xodimlar" element={<Xodimlar />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
