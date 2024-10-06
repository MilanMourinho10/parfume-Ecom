import React from 'react';
import './productInfo.css'; 

const ProductInfo = () => {
  return (
    <section className="safe-for-you">
      <h2>Safe for you, safe for the <em>earth</em>.</h2>
      <div className="info-grid">
        <div className="info-card">
          <div className="icon-circle">
            <img src="group.png" alt="Sustainable Sourcing" />
          </div>
          <h3>SUSTAINABLE SOURCING</h3>
          <p>
            We meticulously source our ingredients from sustainable and eco-friendly suppliers, 
            ensuring that the delicate balance of nature is preserved.
          </p>
        </div>
        <div className="info-card">
          <div className="icon-circle">
            <img src="kemist.png" alt="Clean Formulations" />
          </div>
          <h3>CLEAN FORMULATIONS</h3>
          <p>
            Our perfumes are crafted using clean and non-toxic ingredients, 
            free from harmful chemicals that could compromise your health or the environment.
          </p>
        </div>
        <div className="info-card">
          <div className="icon-circle">
            <img src="package.png" alt="Minimalist Packaging" />
          </div>
          <h3>MINIMALIST PACKAGING</h3>
          <p>
            Our bottles and boxes are thoughtfully designed to minimize waste, 
            using eco-friendly materials that are both beautiful and sustainable.
          </p>
        </div>
        <div className="info-card">
          <div className="icon-circle">
            <img src="heart.png" alt="Cruelty-Free Practices" />
          </div>
          <h3>CRUELTY-FREE PRACTICES</h3>
          <p>
            We are proud to be a cruelty-free brand, never testing our products on animals. 
            Our dedication to safety extends to our furry friends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;