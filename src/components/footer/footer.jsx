import React from 'react';
import './footer.css'; // Kommer till CSS-styling senare

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Oil Essence</h2>
          <p>
          Oil Essence is your provider of high-quality fragrances
           that not only make you smell great, 
          but also care for your skin and are kind to the environment.          
          </p>
        </div>

        <div className="footer-section links">
          <h2>Snabblänkar</h2>
          <ul>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#services">Tjänster</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Kontakta oss</h2>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Stockholm, Sverige</li>
            <li><i className="fas fa-phone-alt"></i> +46 70 123 4567</li>
            <li><i className="fas fa-envelope"></i> info@oilessence.se</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Följ oss</h2>
          <ul>
            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Oil Essence | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
