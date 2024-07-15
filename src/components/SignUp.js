import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      ...formData,
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully');
    window.location.href = '/login'; // Redirect to login page after sign up
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              name="user_firstname"
              variant="outlined"
              fullWidth
              value={formData.user_firstname}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="user_email"
              variant="outlined"
              fullWidth
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="user_password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.user_password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="user_phone"
              variant="outlined"
              fullWidth
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              I have an account <Link to="/login">Log In</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
