import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";

const Items = ({categories}) => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://nc-marketplace-api.herokuapp.com/api/items")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res.items);
      });
  }, []);

  if (items)
    return (
      <div className="items-container">
        <AddItem items={items} setItems={setItems} categories={categories} />
        <h1>Items</h1>
        <p>Total Items: {items.length}</p>

        <div>
          <ul className="items">
            {items.sort((a, b) => b.item_id - a.item_id).map((item) => {
              return (
                <li className="item" key={item.item_id}>
                  <h3 className="item-title">{item.item_name}</h3>
                  <img className="item-image" src={item.img_url} alt={item.item_name} />
                  <p className="item-desc">{item.description}</p>
                  <p className="item-price">£{item.price / 100}</p>
                  <p className="item-category">{item.category_name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
};

export default Items;
