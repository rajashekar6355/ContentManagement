import React, { useState, useEffect } from 'react';
import './ContactForm.css'
import { TextField, Button, Grid } from '@mui/material';

const initialContactState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
};

function ContactForm({ contact, onSave, onCancel }) {
  const [formData, setFormData] = useState(initialContactState);

  // Update form if editing an existing contact
  useEffect(() => {
    if (contact) {
      setFormData(contact);
    } else {
      setFormData(initialContactState);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData(initialContactState);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            {contact ? 'Update Contact' : 'Add Contact'}
          </Button>
          {contact && (
            <Button
              onClick={onCancel}
              style={{ marginLeft: 10 }}
              variant="outlined"
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
