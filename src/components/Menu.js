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
      this.setState({ [e.target.name]: e.target.value });
    };

    const onDelete = (id) => {
      let newData = this.state.users.filter((value) => value.id !== id);
      this.setState({ users: newData });
    };

    const onSearch = (e) => {
      let newData1 = this.state.users.filter((value) =>
        // Object.keys(value).entries(e.target.value.toLowerCase())
        value.name.includes(e.target.value)
      );
      this.setState({ users: newData1 });
      // console.log(e.target.value);
      // console.log(newData1);
    };
    // const getSurname = (e) => {
    //   this.setState({ surname: e.target.value });
    // };

    return (
      <div>
        <div className="container">
          <input placeholder="search item" onChange={onSearch} />
          <select onChange={onSearch}>
            <option>Name</option>
            <option>Surname</option>
            <option>Status</option>
          </select>
          {this.state.users.length ? (
            <div>
              {this.state.users.map((value) => (
                <div className="container-items" key={value.id}>
                  <h3>
                    {value.name} {value.surname}
                    {value.id}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div>No Data</div>
          )}
          {/* {this.state.users.map(({ id, title }) => (
            <div
              key={id}
              className={`nav-item nav-item__${id === this.state.active}`}
              onClick={() => onActive(id)}
            >
              {title}
              <button onClick={() => onDelete(id)}>{id}</button>
            </div>
          ))} */}
        </div>
        <hr />
        {/* <div>
          <h2>State</h2>
          <h3>Name: {this.state.name}</h3>
          <h3>Surname: {this.state.surname}</h3>
          <input name="name" placeholder="name" onChange={getName} />
          <input name="surname" placeholder="surname" onChange={getName} />
        </div> */}
      </div>
    );
  }
}

export default Menu;

// let obj = {
//   name: "Body.js",
// };
// console.log(obj['name']);
// console.log(obj.name);
