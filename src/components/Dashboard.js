import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" align="center">
          No user data found. Please log in again.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h6">User Information</Typography>
        <Typography variant="body1">Name: {user.user_firstname}</Typography>
        <Typography variant="body1">Email: {user.user_email}</Typography>
        <Typography variant="body1">Phone: {user.user_phone}</Typography>
        <Typography variant="body1">City: {user.user_city}</Typography>
        <Typography variant="body1">Zipcode: {user.user_zipcode}</Typography>
      </Paper>
    </Container>
  );
};

export default Dashboard;
