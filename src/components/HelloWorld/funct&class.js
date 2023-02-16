// function n class components

import React, { Component } from 'react'

export default class App extends Component {
  state={
    name : "Talent Hub",
  }
  render() {
    return (
      <div>
        <h3>Welcome to {this.state.name}</h3>
      </div>
    )
  }
}