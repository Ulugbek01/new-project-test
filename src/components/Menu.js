import React, { Component } from "react";
import "../Menu.css";
import { list } from "../utils/users";

class Menu extends Component {
  state = {
    users: list,
    active: null,
    name: "",
    surname: "",
  };
  render() {
    const onActive = (id) => {
      //   console.log(id);
      this.setState({ active: id });
    };

    const getName = (e) => {
    //   console.log(e.target.name);
      this.setState({[e.target.name]: e.target.value });
    };

    // const getSurname = (e) => {
    //   this.setState({ surname: e.target.value });
    // };

    return (
      <div>
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
        <hr />
        <div>
          <h2>State</h2>
          <h3>Name: {this.state.name}</h3>
          <h3>Surname: {this.state.surname}</h3>
          <input name="name" placeholder="name" onChange={getName} />
          <input name="surname" placeholder="surname" onChange={getName} />
        </div>
      </div>
    );
  }
}

export default Menu;
