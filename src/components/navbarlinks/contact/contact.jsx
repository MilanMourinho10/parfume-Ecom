import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du hantera formulärinlämning, t.ex. genom att skicka datan till en server
    console.log(formData);
    alert('Meddelande skickat!');
    setFormData({ name: '', email: '', message: '' }); // Rensa formuläret efter inlämning
  };

  return (
    <div className="contact-container">
      <h1>Kontakta oss</h1>
      <p>Vi ser fram emot att höra från dig! Fyll i formuläret nedan eller använd våra kontaktuppgifter för att nå oss.</p>

      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <p>Telefon: +46 70 123 4567</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>E-post: info@oilessence.se</p>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Adress: Stockholm, Sverige</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Skicka</button>
      </form>
    </div>
  );
};

export default Contact;
