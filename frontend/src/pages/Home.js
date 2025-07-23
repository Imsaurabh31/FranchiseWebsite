import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Har Ghar Vedic Maths</h1>
            <h2>Fearless Learning with Neeraj Gaur</h2>
            <p>Transform the way you think about mathematics with our proven Vedic Maths techniques</p>
            <div className="hero-buttons">
              <Link to="/franchise" className="btn btn-primary">Join Us</Link>
              <Link to="/contact" className="btn btn-secondary">Contact</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner/Carousel Section */}
      <section className="banner">
        <div className="container">
          {/* Carousel implementation would go here */}
          <div className="banner-placeholder">
            <h3>Featured Programs</h3>
            <p>Discover our range of Vedic Maths programs for all ages</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits section">
        <div className="container">
          <h2 className="section-title">Benefits of Vedic Maths</h2>
          <div className="benefits-grid">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Speed Calculation</h3>
              <p>Learn to calculate 10-15 times faster than conventional methods</p>
            </motion.div>
            <motion.div 
              className="card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Improved Concentration</h3>
              <p>Enhance focus and mental clarity through systematic practice</p>
            </motion.div>
            <motion.div 
              className="card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Reduced Mistakes</h3>
              <p>Develop error-checking techniques that improve accuracy</p>
            </motion.div>
            <motion.div 
              className="card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Boosted Confidence</h3>
              <p>Build self-assurance through mastery of mathematical concepts</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="whatsapp-cta section">
        <div className="container">
          <h2>Join Our WhatsApp Community</h2>
          <p>Get daily math tips, puzzles, and stay connected with other learners</p>
          <a 
            href={`https://wa.me/?text=${encodeURIComponent('I want to join the Vedic Maths community!')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Join WhatsApp Group
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;