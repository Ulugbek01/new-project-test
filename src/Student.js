import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "green",
          color: "#fff",
          fontSize: "24px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Student;
