import React, { useState } from 'react';
import { TextField, Button, Box, Stack, Snackbar } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Phone number must be at least 10 digits";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/contacts', formData);
        if (response.data.success) {
          setSuccessMessage('Contact added successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            jobTitle: ''
          });
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Failed to add contact');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            type="email"
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Add Contact
          </Button>
        </Stack>
      </form>

      {successMessage && (
        <Snackbar
          open={true}
          message={successMessage}
          autoHideDuration={3000}
          onClose={() => setSuccessMessage('')}
        />
      )}
      {errorMessage && (
        <Snackbar
          open={true}
          message={errorMessage}
          autoHideDuration={3000}
          onClose={() => setErrorMessage('')}
        />
      )}
    </Box>
  );
};

export default ContactForm;
