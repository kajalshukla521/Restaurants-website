import React from "react";
import Layout from "../component/layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      {/* Main container box to take up the full height */}
      <Box
        sx={{
          minHeight: "100vh", // Full height of viewport
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
          backgroundColor: "#f5f5f5", // Background color for better contrast
        }}
      >
        {/* Header section */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact My Restaurant
          </Typography>
        </Box>

        {/* Card Section Above Map and Contact Form */}
        <Box sx={{ width: "100%", maxWidth: "1200px", mb: 4 }}>
          <Grid container spacing={3} justifyContent="center">
            {/* Card 1 - Email */}
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <MailIcon sx={{ fontSize: 50, color: "skyblue" }} />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    Email
                  </Typography>
                  <Typography variant="body2">help@myrest.com</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 - Phone */}
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <CallIcon sx={{ fontSize: 50, color: "green" }} />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2">123-456-7890</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 - Address */}
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <LocationOnIcon sx={{ fontSize: 50, color: "red" }} />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    Address
                  </Typography>
                  <Typography variant="body2">
                    123 Main Street, Mumbai, Maharashtra, India
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Grid container for Map and Contact Form */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "1200px", // Adjust the maxWidth as needed
            margin: "auto",
            "@media (max-width:600px)": {
              flexDirection: "column", // Stacks the columns on smaller screens
            },
          }}
        >
          {/* Left Side - Google Map */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid #ccc", // Optional border for visual separation
                "@media (max-width:600px)": {
                  height: "300px", // Adjust height for smaller screens
                },
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609905906!2d72.741101908111!3d19.08219783951657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c08fbb341%3A0x29d7391e40e77f9c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1630832392077!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Contact Us
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  type="tel"
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ width: "100%" }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Contact;
