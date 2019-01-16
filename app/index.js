import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import User from '../Components/User.js'
import Orders from '../Components/Orders.js'

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

ReactDOM.render(
  <App/>,
  document.getElementById('app')

)