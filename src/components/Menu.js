import React, { Component } from "react";
import "../Menu.css";
import { list } from "../utils/users";

class Menu extends Component {
  state = {
    users: list,
    active: null,
  };
  render() {
    const onActive = (id) => {
      //   console.log(id);
      this.setState({ active: id });
    };
    return (
      <div className="container">
        {this.state.users.map(({ id, title }) => (
          <div
            key={id}
            className={`nav-item nav-item__${id === this.state.active}`}
            onClick={() => onActive(id)}
          >
            {title}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
