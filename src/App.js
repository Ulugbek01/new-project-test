import React, { Component } from "react";
import Buyurtmalar from "./components/Buyurtmalar";
import Mahsulotlar from "./components/Mahsulotlar";
import Xodimlar from "./components/Xodimlar";
import { Mijozlar } from "./components/Mijozlar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Xodimlar />
        <Buyurtmalar />
        <Mahsulotlar />
        <Mijozlar />
      </div>
    );
  }
}
