import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Items from "./components/Items";
import Users from "./components/Users";
import Nav from "./components/Nav";
import Basket from "./components/Basket";
import Orders from "./components/Orders";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [users, setUsers] = useState();
  const [categories, setCategories] = useState();

  // USERS
  useEffect(() => {
    fetch("https://tradeoff-api.herokuapp.com/api/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsers(res.users);
      });
  }, []);

  // CATEGORIES
  useEffect(() => {
    fetch("https://tradeoff-api.herokuapp.com/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCategories(res.categories);
      });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route
          path="/categories"
          element={
            <Categories categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/items" element={<Items categories={categories} />} />
        <Route
          path="/users"
          element={<Users users={users} setUsers={setUsers} />}
        />
        <Route path="/basket" element={<Basket users={users} />} />
        <Route path="/orders" element={<Orders users={users} />} />
        {/* <Route path="/userorders" element={<UserOrders orders={orders} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
