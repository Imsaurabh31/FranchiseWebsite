import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    location: '',
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
    
    if (!formData.whatsapp.trim()) {
      tempErrors.whatsapp = 'WhatsApp number is required';
      isValid = false;
    }
    
    if (!formData.location.trim()) {
      tempErrors.location = 'Location is required';
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
        
        setTimeout(() => {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            whatsapp: '',
            location: '',
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
    <div className="franchise-page">
      <section className="franchise-hero section">
        <div className="container">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Us as a Franchise Partner
          </motion.h1>
        </div>
      </section>

      <section className="franchise-info section">
        <div className="container">
          <div className="info-grid">
            <motion.div 
              className="info-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Why Become a Vedic Maths Partner?</h2>
              <ul>
                <li>Low investment, high returns business model</li>
                <li>Comprehensive training and ongoing support</li>
                <li>Proven teaching methodology and curriculum</li>
                <li>Marketing and promotional assistance</li>
                <li>Be part of a growing educational network</li>
              </ul>
            </motion.div>
            <motion.div 
              className="info-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Image would go here */}
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="franchise-form section">
        <div className="container">
          <h2 className="section-title">Interested in Becoming a Partner?</h2>
          <p className="form-intro">Fill out the form below and we'll get in touch with you to discuss the opportunities.</p>
          
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
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
              <label htmlFor="whatsapp">WhatsApp Number*</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                className={`form-control ${errors.whatsapp ? 'is-invalid' : ''}`}
                value={formData.whatsapp}
                onChange={handleChange}
              />
              {errors.whatsapp && <div className="invalid-feedback">{errors.whatsapp}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Your Location*</label>
              <input
                type="text"
                id="location"
                name="location"
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && <div className="invalid-feedback">{errors.location}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={submitStatus === 'submitting'}
            >
              {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="alert alert-success mt-3">
                Thank you for your interest! We'll contact you shortly.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-danger mt-3">
                There was an error submitting your form. Please try again.
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Franchise;