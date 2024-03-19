import React, { useEffect, useState } from "react";
import axios from 'axios';
import style from '../css/Wishlist.css'

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [updater, setUpdater] = useState(false);

  const fetchItems = () => {
    axios.get("http://localhost:3000/api/product/")
      .then((response) => {
        setWishlistItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addItemToWishlist = (body) => {
    console.log("addItemToWishlist", body);
    axios.post("http://localhost:3000/api/product/", body)
      .then(() => {
        setUpdater(!updater);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeItemFromWishlist = (id) => {
    console.log("removeItemFromWishlist", id);
    axios.delete(`http://localhost:3000/api/product/${id}`)
      .then(() => {
        setUpdater(!updater);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchItems();
  }, [updater]);

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">Wishlist ({wishlistItems.length})</h1>
        <button className="move-to-bag-button">Move All To Bag</button>
      </div>
      <ul className="wishlist-items">
        {wishlistItems.map((item) => (
          <li key={item.id} className="wishlist-item">
            <div className="item-details">
              <img src={item.imgUrl} alt={item.name} className="item-image" />
              <div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">Price: ${item.price}</p>
              </div>
            </div>
            <button className="remove-button" onClick={() => removeItemFromWishlist(item.id)}>
              <i className="bi bi-trash"></i>
            </button>
            <button className="add-to-cart-button" onClick={() => addItemToWishlist(item.id)}>
              <i className="bi bi-cart"></i> Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
