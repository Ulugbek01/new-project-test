import React, { Component } from 'react';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      conunt: 1,
    }
  }
  render() {
    return (<div>
        <p>{this.state.conunt}</p>
        <button>Click me</button>
        <h2>Buyurtmalar</h2>
      </div>);
  }
}
