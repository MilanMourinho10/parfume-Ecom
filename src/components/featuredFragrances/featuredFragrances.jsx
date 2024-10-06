import React from 'react';
import ProductCard from '../productsCards/productCard';
import './featuredFragrances.css';


const FeaturedFragrances = () => {
  const products = [
    {
      image: '/parfumproduct.jpg',
      name: 'Meadow',
      description: 'Breezy & Joyful',
      price: 25.95,
      
    },
    {
      image: '/parfumproduct.jpg',
      name: 'Jardinea',
      description: 'Strongly Floral',
      price: 25.95,
      
    },
    {
      image: './parfumproduct.jpg',
      name: 'Lavanda',
      description: 'Calming',
      price: 25.95,
      
    },
    {
      image: '/parfumproduct.jpg',
      name: 'Neroli',
      description: 'Deep & Sweet',
      price: 25.95,
      
    },
    
    
  ];

  return (
    <div> 
      <section className="featured-fragrances">
        <h2>Featured <span>fragrances</span>.</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <div className="created-section">
        <span>Created for <em>everyone.</em> ❉ Created for <em>everyone.</em> ❉ Created for <em>everyone.</em></span>
      </div>
    </div>
  );
};

export default FeaturedFragrances;
