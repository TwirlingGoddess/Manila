import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from '../User/User.js'
import Orders from '../Orders/Orders.js'

class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <User />
        <Orders />
      </div>
    )
  }
}

export default App