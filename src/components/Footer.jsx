import React, { Component } from "react";
import { Button, Container } from "./FooterStyle";

class Footer extends Component {
  render() {
    return <Container size={11}>
        Footer
      <Button className="btn" active={'true1'}>Click me</Button>
    </Container>;
  }
}

export default Footer;
