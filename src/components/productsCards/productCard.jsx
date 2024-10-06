import React from 'react';
import './productCard.css';

const ProductCard = ({ image, name, description, price, onSale }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={`${name} Parfum`} />
        {onSale && <span className="badge">On Sale</span>}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <button className="shop-now">Shop Now</button>
    </div>
  );
};

export default ProductCard;
