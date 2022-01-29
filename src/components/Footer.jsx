import React, { Component } from "react";
import { Button, Container } from "./FooterStyle";

class Footer extends Component {
  state = {
    darkMode : true,
  }
  render() {
      const darkMode = () => {
         this.setState({darkMode: !this.state.darkMode})
      }
    return <Container size={11} para={this.state.darkMode}>
        Footer
      <Button className="btn" onClick={darkMode} size={'small'}>Click me</Button><br />
      <Button className="btn" onClick={darkMode} size={'medium'}>Click me</Button><br/>
      <Button className="btn" onClick={darkMode} size={'large'}>Click me</Button>
      <Container.Box>Box</Container.Box>
    </Container>;
  }
}

export default Footer;
