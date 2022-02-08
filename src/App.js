import React, { Component } from "react";
import { Filiallar } from "./components/Filiallar";
import { MyTest } from "./components/MyTest";
import { NavLink } from "react-router-dom";
import "./app.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to={"/Buyurtmalar"}>Buyurtmalar</NavLink>
        <NavLink to={"/Mahsulotlar"}>Mahsulotlar</NavLink>
        <NavLink to={"/Xodimlar"}>Xodimlar</NavLink>
        <NavLink to={"/Mijozlar"}>Mijozlar</NavLink>
      </div>
    );
  }
}
