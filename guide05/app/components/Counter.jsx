'use strict'

import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({count: ++this.state.count});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Count: </h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.add}>Add</button> 
      </div>
    );
  }
}
