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

    var bids = orders.filter(order => order.type==='bid')

    var asks = orders.filter(order => order.type === 'ask')

    var bidsArray = bids.map(order => {
      return(
        <div>
          <h3>{ order.id }</h3>
          <h4>{ order.type }</h4>
          <h4>{ order.price }</h4>
          <h4>{ order.volume }</h4>
        </div>
      )
    })    
    var asksArray = asks.map(order => {
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
        <hr />
          <h1>Bids</h1>
          <article>
            { bidsArray }
          </article>
          <h1>All Orders</h1>
          <article>
            { ordersArray }
          </article>
          <h1>Asks</h1>
          <article>
            { asksArray }
          </article>

      </div>
    )
  }
}

export default Orders