// Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import Loginpage from "../images/loginpagebg.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    const loggedInUser = localStorage.getItem("isLoggedIn");
    if (loggedInUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if email and password are entered
    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);
      
      // Save login status in localStorage
      localStorage.setItem("isLoggedIn", true);

      // Redirect to home page
      navigate("/home");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Loginpage})`,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
