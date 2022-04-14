import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'

function UserOrders({orders}) {
    console.log('orders:', orders)
    if(orders) return (
        <div>
            <h1>User Orders</h1>
            {orders.map((order) => {
          return (
              <ul>
                  <li key={order.item_id}>
                    <p>{order.item_name}</p>
                  </li>
              </ul>
          )
        })}
        </div>
    )
}

export default UserOrders