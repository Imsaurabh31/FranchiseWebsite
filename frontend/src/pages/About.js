import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
        </div>
      </section>

      <section className="partner-profile section">
        <div className="container">
          <div className="profile-card">
            <motion.div 
              className="profile-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Profile image would go here */}
              <div className="image-placeholder"></div>
            </motion.div>
            <motion.div 
              className="profile-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>ABC – Certified Vedic Maths Educator</h2><!-- Updated profile -->
              <p>With over X years of experience in teaching Vedic Mathematics, ABC has helped thousands of students overcome math anxiety and develop a love for numbers.</p>
              <p>As a certified educator under the guidance of Neeraj Gaur, ABC brings authentic Vedic Math techniques to students of all ages.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mission section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>At Har Ghar Vedic Maths, our mission is to make mathematics accessible, enjoyable, and fear-free for everyone. We believe that the ancient wisdom of Vedic Mathematics, when taught correctly, can transform the way people approach calculations and problem-solving.</p>
            <p>We are committed to spreading the knowledge of Vedic Mathematics to every household in India, empowering students with skills that will benefit them throughout their academic and professional lives.</p>
          </motion.div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <motion.div 
              className="card testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>"My brother used to fear math exams, but after just three months of Vedic Math classes, she approaches problems with confidence and excitement."</p>
              <h4>- Parent of 12-year-old student</h4>
            </motion.div>
            <motion.div 
              className="card testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>"The speed calculation techniques have helped me save valuable time during competitive exams. I wish I had learned this earlier!"</p>
              <h4>- Engineering student</h4>
            </motion.div>
            <motion.div 
              className="card testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>"As a teacher myself, I was amazed at how Vedic Math simplifies complex calculations. Now I incorporate these methods in my own classroom."</p>
              <h4>- Mathematics teacher</h4>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;