import React, { Component } from "react";
import { ReactComponent as User } from "./icons/users.svg";
import "./App.css";
const list = [
  {
    id: 1,
    // icon: User,
    title: "Home",
  },
  {
    id: 2,
    // icon: User,
    title: "About",
  },
  {
    id: 3,
    // icon: User,
    title: "Services",
  },
  {
    id: 4,
    // icon: User,
    title: "Contact",
  },
];
export default class App extends Component {
  render() {
    return (
      <div>
        {list.map((value) => {
          return (
            <div className="item">
              <User />
              <h3>{value.title}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
