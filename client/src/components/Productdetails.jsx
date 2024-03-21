import React, { useState } from 'react';
import style from "../css/Productdetails.css";

const productData = [
  {
    id: 1,
    name: 'Havic HV G-92 Gamepad',
    price: '$192.00',
    image: "https://m.media-amazon.com/images/I/61rF0YjnVeL._AC_UY327_FMwebp_QL65_.jpg",
    reviews: '150 Reviews',
    stockStatus: 'In Stock',
    features: [
      {
        title: 'Material',
        description: 'High quality vinyl',
      },
      {
        title: 'Adhesive',
        description: 'Air channel adhesive for easy bubble-free install & mess-free removal',
      },
      {
        title: 'Sensitivity',
        description: 'Pressure sensitive',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    delivery: 'Free Delivery',
    returnPolicy: 'Free 30 Days Delivery Returns',
  }
];

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemToWishlist = (id) => {
    console.log(`Item with id ${id} added to wishlist`);
  };

  return (
    <div className="product-details">
      <h1 className="product-name">{product.name}</h1>
      <div className="product-image-container">
  <img className="product-image" src={product.image} alt={product.name} />
</div>
      <p className="product-reviews">
        {product.reviews}{' '}
        <br />
        <span>
          <span className="fa fa-star checked orange"></span>
          <span className="fa fa-star checked orange"></span>
          <span className="fa fa-star checked orange"></span>
          <span className="fa fa-star checked orange"></span>
          <span className="fa fa-star checked orange"></span>
        </span>
      </p>
      <p className="product-stock-status">{product.stockStatus}</p>
      <p className="product-price">{product.price}</p>
      <h2 className="product-description-title">Description</h2>
      <ul className="product-description-list">
        {product.features.map((feature) => (
          <li key={feature.title} className="product-description-item">
            <strong className="product-description-title">{feature.title}:</strong>{' '}
            {feature.description}
          </li>

        ))}
      </ul>
      <h2 className="product-sizes-title">Sizes</h2>
      <ul className="product-sizes-list">
        {product.sizes.map((size, index) => (
          <li
            key={index}
            className={`product-size-item ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </li>
        ))}
      </ul>
      <br />
      <div className="quantity-container">
        <label htmlFor="quantityInput" className="quantity-label">Quantity:</label>
        <div className="quantity-control">
          <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <input
            className="quantity-input"
            id="quantityInput"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <br />
      <div className="buttons-container">
        <button className="add-to-cart-button" onClick={() => addItemToWishlist(product.id)}>
          <i className="bi bi-cart"></i> Add to Cart
        </button>
        <button className="wishlist-button" onClick={() => addItemToWishlist(product.id)}>
          <i className="bi bi-bookmark-heart-fill">To Wishlist</i> 
        </button>
      </div>
      <img className='delevery' src="https://i.ibb.co/BrVBBQm/Screenshot-24.png" width="desired-width" height="desired-height" />
    </div>
  );
};

const ProductDetailsPage = () => {
  const product = productData[0];
  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
