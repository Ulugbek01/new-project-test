import React, { Component } from "react";

class Navbar extends Component {
  state = {
    isNavbar: true,
  };

  render() {
    const Navbar = () => {
      this.setState({ isNavbar: !this.state.isNavbar });
    };
    return (
      <div>
        <div
          style={{
            padding: "30px 10px",
            backgroundColor: "grey",
            fontWeight: "bold",
          }}
        >
          {this.state.isNavbar && "Navbar"}
          {/* && bu belgi chap tomondagi ifoda true bo'lsa o'ng tomondagi ifodani chiqaradi */}
        </div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            // border: "none",
            color: "white",
            cursor: "pNointer",
          }}
          onClick={Navbar}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Navbar;
