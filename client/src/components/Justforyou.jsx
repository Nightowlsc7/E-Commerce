import React, { useEffect, useState } from "react"
import axios from 'axios'
import style from '../css/Wishlist.css'

const JustForYou = () => {
  const [justForYouItems, setJustForYouItems] = useState([])
  const [updater, setUpdater] = useState(false)
  const [ratings, setRatings] = useState({}) 

  const fetchItems = () => {
    axios.get("http://localhost:3000/api/justforyou/")
      .then((response) => {
        setJustForYouItems(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [updater])

  const handleRatingChange = (itemId, rating) => {
    setRatings({ ...ratings, [itemId]: rating })
  }

  return (
    <div className="wishlist-container">
    <div className="wishlist-header">
      <h1 className="wishlist-title">
        <span className="red-element"></span> 
        Just For You
      </h1>
      <button className="move-to-bag-button">See All</button>
    </div>
    <ul className="wishlist-items">
      {/* Your existing list items */}
    </ul>
      <ul className="wishlist-items">
        {justForYouItems.map((item) => (
          <li key={item.id} className="wishlist-item">
            <div className="item-details">
              <img src={item.imgUrl} alt={item.name} className="item-image" />
              <div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">Price: ${item.price}</p>
                {/* Dynamic star ratings */}
                <div className="star-container">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <span
                      key={index}
                      className={`fa fa-star ${index <= (ratings[item.id] || 0) ? 'checked' : ''}`}
                      onClick={() => handleRatingChange(item.id, index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <button className="eye" onClick={() => removeItemFromWishlist(item.id)}>
            <i class="bi bi-eye"></i>
            </button>
            <button className="add-to-cart-button" onClick={() => addItemToWishlist(item.id)}>
              <i className="bi bi-cart"></i> 
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
  
    </div>
  )
}

export default JustForYou
