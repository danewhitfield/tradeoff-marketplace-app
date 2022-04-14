import { Link } from "react-router-dom";

import React from 'react'
import Header from "./Header";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Header />
      </div>
      <div className="nav-links">
        <Link to='/categories' className="nav-item">Categories</Link>
        <Link to='/items' className="nav-item">Items</Link>
        <Link to='/users' className="nav-item">Users</Link>
        <Link to='/orders' className="nav-item">Orders</Link>
        <Link to='/basket' className="nav-item">Basket</Link>
      </div>
    </nav>
  )
}

export default Nav