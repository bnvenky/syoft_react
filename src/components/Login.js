import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.user_email === formData.user_email && storedUser.user_password === formData.user_password) {
      navigate('/dashboard');
    } else {
      alert('You don\'t have access. Please sign up first.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        LogIn
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Log In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              I don't have an account <Link to="/signup">Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;

