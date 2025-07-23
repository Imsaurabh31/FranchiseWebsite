import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <h1>Har Ghar Vedic Maths</h1>
          </Link>

          <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <motion.div 
            className={`navbar-menu ${isOpen ? 'active' : ''}`}
            initial={false}
            animate={isOpen ? { x: 0 } : { x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/franchise" className={location.pathname === '/franchise' ? 'active' : ''}>Join Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
              </li>
            </ul>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent('I want to join the Vedic Maths community!')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp navbar-btn"
            >
              Join WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;