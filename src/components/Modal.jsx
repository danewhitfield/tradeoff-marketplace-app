import Rodal from "rodal";
import "rodal/lib/rodal.css";

import React from "react";
import { findByLabelText } from "@testing-library/react";

const Modal = ({ show, hideModal, categories, handleOnSubmit, handleOnChange, newItem, isError }) => {
  return (
    <Rodal height='400' width='500' closeOnEsc='true' visible={show} onClose={hideModal}>
      <div className="item-form">
          <form onSubmit={handleOnSubmit}>
            <div className="form">
              <input
              placeholder="Item Name"
                type="text"
                name="item_name"
                value={newItem.item_name}
                onChange={(e) => handleOnChange(e)}
              ></input>
              <input
              placeholder="Description"
                type="textarea"
                name="description"
                value={newItem.description}
                onChange={handleOnChange}
              ></input>
              <input placeholder="Image URL" type="text" name="img_url" value={newItem.img_url} onChange={handleOnChange}></input>
              <input
              placeholder="Price"
                type="text"
                name="price"
                value={newItem.price}
                onChange={handleOnChange}
              ></input>
              <label htmlFor="select">Categories</label>
              <select className="dropdown" onChange={handleOnChange} value={newItem.category_name} name="category_name" id="category_name">
                {categories.map(category => {
                  return (
                    <option key={category.category_name}>{category.category_name}</option>
                  )
                })}
              </select>
            </div>
            <div className="form-btn"><button className="add-item-btn">Add Item</button></div>
          </form>
          { isError && <p className="err-msg">Something went wrong :(</p>}
      </div>
    </Rodal>
  );
};

export default Modal;