import { useState } from "react";

const AddItem = ({ items, setItems, categories }) => {
const defaultObj = {
    item_id: 57632781,
    item_name: "",
    description: "",
    img_url: "",
    price: '',
    category_name: "",
  }

  const [isError, setIsError] = useState(false)
  const [newItem, setNewItem] = useState(defaultObj);

  const handleOnChange = (e) => {
    const value = e.target.value
    setNewItem(currItem => {
      const updatedItem = {...currItem}
      updatedItem[e.target.name] = value
      return updatedItem
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems((currentItems) => {
      const newItems = [...currentItems, newItem];
      return newItems;
    });
    const itemBody = {...newItem}
    delete itemBody['item_id']
    fetch('https://nc-marketplace-api.herokuapp.com/api/items', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(itemBody)
    }).catch((err) => {
      setIsError(true)
      setItems(currItems => {
        const newItems = [...currItems]
        newItems.pop()
        return newItems
      })
    })
    // setNewItem(defaultObj)
  };

  return (
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
  );
};

export default AddItem;
