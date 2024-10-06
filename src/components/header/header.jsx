import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='top-bar'>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li><a href="/shop/shop.html">Shop</a></li>  
          <li><a href="/about/about.html">About</a></li>  
        </ul>
        <div className='logo-container'>
          <img src="bg-removebg.png" alt="Logo" className='logo-img' />
        </div>
        <ul className='nav-links'>
          <li><a href="/blog">Blog</a></li>  
          <li><a href="/contact/contact.html">Contact</a></li>  
        </ul>
        <div className='user-icons'>
          <a href='/login'>
            <img src='/user.png' alt='Logga in' />
          </a>
          <a href='/cart'>
            <div className='cart-icon'>
              <img src='/market.png' alt='Kundvagn' />
              <span className='cart-count'>3</span>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
