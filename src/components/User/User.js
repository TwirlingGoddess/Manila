import React, { Component } from 'react';
var user = require('../../assets/user.json')

class User extends Component {

  render() {
    var userArray = user.balances.map(duo => {
      return(
        <h3>{ duo.symbol } : <em>{ duo.balance }</em></h3>
      )
    })
    return(
      <div>
        <h1>User</h1>
        <h2>{ user.name }</h2>
        {userArray}
      </div>
    )
  }
}

export default User