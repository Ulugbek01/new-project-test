import React, { Component } from 'react';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    }
  }
  render() {
    const Inc = ()=> {
      this.setState({count: this.state.count+=1});
    }

    return (<div>
        {/* <p>React Class Components</p> 
        <p>{this.state.count}</p>
        <button onClick={Inc}>Click me</button> */}
      </div>);
  }
}
