import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Student;
