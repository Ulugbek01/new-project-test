import React, { Component } from 'react';
import { SwitchContainer, Switch1, Switch2 } from './style';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
      id: '000',
    }
  }
  render() {
    const onActive = () =>{
      this.setState({active: !this.state.active});
      console.log(this.state.active);
    }
    return (
      <SwitchContainer>
        <Switch1 onClick={onActive} a={this.state.active}></Switch1>
        <Switch2 onClick={onActive} a={this.state.active}></Switch2>
        {/* <span onClick={onActive}></span> */}
        {this.state.active}
      </SwitchContainer>
    );
  }
}
