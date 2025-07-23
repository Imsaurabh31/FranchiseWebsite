import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        setSubmitStatus('submitting');
        
        // In a real application, you would send this data to your backend
        // const response = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // });
        
        // if (response.ok) {
        //   setSubmitStatus('success');
        //   setFormData({
        //     name: '',
        //     email: '',
        //     message: ''
        //   });
        // } else {
        //   setSubmitStatus('error');
        // }
        
        // For demo purposes:
        setTimeout(() => {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }, 1500);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      }
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="contact-info section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Get In Touch</h2>
              <div className="contact-item">
                <i className="icon-phone"></i>
                <p>+91 XXXXXXXXXX</p>
              </div>
              <div className="contact-item">
                <i className="icon-email"></i>
                <p>info@hargharvedicmaths.com</p>
              </div>
              <div className="contact-item">
                <i className="icon-location"></i>
                <p>123 Education Street, City, State, India</p>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="icon-facebook"></i></a>
                  <a href="#" className="social-icon"><i className="icon-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="icon-youtube"></i></a>
                  <a href="#" className="social-icon"><i className="icon-whatsapp"></i></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="google-map">
          {/* In a real application, you would embed a Google Map here */}
          <div className="map-placeholder">
            <p>Google Map will be embedded here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;