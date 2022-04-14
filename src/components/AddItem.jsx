import { useState } from "react";
import Modal from "./Modal";
import {SiAddthis} from 'react-icons/si'

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
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    // toggle the modal
    setShowModal(prev => !prev)
  }

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
    fetch('https://tradeoff-api.herokuapp.com/api/items', {
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
    <div>
      <div className="show-modal">
          <button className="add-new-item-btn" onClick={() => setShowModal(true)}>
            <p className="add-item-icon">
              <SiAddthis/>
            </p>
          </button>
          <Modal
            show={showModal}
            hideModal={() => setShowModal(false)}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            newItem={newItem}
            categories={categories}
            isError={isError}
          />
        </div>
    </div>
  );
};

export default AddItem;
