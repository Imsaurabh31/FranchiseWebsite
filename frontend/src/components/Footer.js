import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Har Ghar Vedic Maths</h2>
            <p>Fearless Learning with Neeraj Gaur</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/franchise">Join Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="icon-facebook"></i></a>
                <a href="#" className="social-icon"><i className="icon-instagram"></i></a>
                <a href="#" className="social-icon"><i className="icon-youtube"></i></a>
                <a href="#" className="social-icon"><i className="icon-whatsapp"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: info@hargharvedicmaths.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
              <a 
                href={`https://wa.me/?text=${encodeURIComponent('I want to join the Vedic Maths community!')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Har Ghar Vedic Maths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;