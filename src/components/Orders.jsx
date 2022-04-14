import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import UserOrders from "./UserOrders";


const Orders = ({users}) => {
  const [username, setUsername] = useState('')
  const [orders, setOrders] = useState([]);


  const clickHandler = (result) => {
    console.log('result:', result)
    setUsername(result)
  }

  console.log('username:', username)


    useEffect(() => {
        fetch(`https://nc-marketplace-api.herokuapp.com/api/users/${username}/orders`).then((res) => {
            return res.json()
        }).then((res) => {
            setOrders(res.items)
        })
    }, [username])

    console.log('orders:', orders)

  if(users) return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => {
                return (
                    <li key={user.username}>
                      <button onClick={() => clickHandler(user.username)}>{user.username}</button>
                    </li>
                )
            })}
        </ul>
        {orders && (
        <div>
            <h1>User Orders</h1>
            {orders.map((order) => {
          return (
              <ul>
                  <li key={order.item_id}>
                    {console.log('order:', order.item_id)}
                    {order.item_name}
                  </li>
              </ul>
          )
        })}
        </div>
    )}
    </div>
  )
}

export default Orders