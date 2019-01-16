import React, { Component } from 'react';
var orders = require('../order-book.json')

class Orders extends Component {

  render() {
    var ordersArray = orders.map(order => {
      return(
        <div>
          <h3>{ order.id }</h3>
          <h4>{ order.type }</h4>
          <h4>{ order.price }</h4>
          <h4>{ order.volume }</h4>
        </div>
      )
    })

    return(
      <div>
        <h1>Orders</h1>
        { ordersArray }
      </div>
    )
  }
}

export default Orders