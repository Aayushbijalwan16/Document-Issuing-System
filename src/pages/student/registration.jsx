// src/StudentRegistrationForm.js

import React, { useState } from 'react';
import './StudentRegistrationForm.scss';
import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.fullName || !formData.branch || !formData.year || !formData.rollNumber || !formData.contactNo || !formData.fathersName) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await axios.post('API', formData);
    console.log('Form Data Submitted:', response.data);
    alert("Registration successful!");
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("There was an error submitting the form.");
  }
};

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    branch: '',
    year: '',
    rollNumber: '',
    contactNo: '',
    fathersName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // Here, you can add code to send the form data to a server or handle it as needed
//   };

  return (
    <div className="registration-form">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number:</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fathersName">Father's Name:</label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;