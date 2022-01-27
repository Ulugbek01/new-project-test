import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const usersInfo = [
  {
    id: 1,
    firstName: "Ulugbek",
    lastName: "Duvlanov",
    location: "Uzbekistan",
  },
  {
    id: 2,
    firstName: "Ulugbek2",
    lastName: "Duvlanov2",
    location: "Uzbekistan2",
  },
  {
    id: 3,
    firstName: "Ulugbek3",
    lastName: "Duvlanov3",
    location: "Uzbekistan3",
  },
  {
    id: 4,
    firstName: "Ulugbek4",
    lastName: "Duvlanov4",
    location: "Uzbekistan4",
  },
];

class App2 extends Component {
  // constructor(){
  //     super();
  //     this.state ={
  //     }
  // }
  state = {
    users: usersInfo,
  };
  render() {
    return (
      <div>
        {/* <Navbar />
        <Body users={this.state.users} usersCount={this.state.users.length} />
        <Footer /> */}
      </div>
    );
  }
}

export default App2;
