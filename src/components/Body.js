import React, { Component } from "react";

class Body extends Component {
  render() {
    console.log(this.props.users);
    console.log(this.props.usersCount);

    const { users, usersCount } = this.props;

    return (
      <div>
        {users.map((value) => (
          <div
            key={value.id}
            style={{
              border: "2px dotted blue",
              display: "inline-block",
              margin: "10px",
              padding: "10px",
            }}
          >
            {value.firstName}
            {value.lastName}
          </div>
        ))}
      </div>
    );
  }
}

export default Body;
