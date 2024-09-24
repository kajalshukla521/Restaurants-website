import React from "react";
import Layout from "../component/layout/Layout";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Banner from "../images/banner.jpeg"; 

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ marginLeft: "30px", textAlign: "left", width: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "40px", sm: "70px" },
              fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
              color: "black",
              textAlign: { xs: "center", sm: "left" },
              marginBottom: "15px",
            }}
          >
            Food Website
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "lighter",
              fontSize: { xs: "30px", sm: "40px" },
              color: "black",
              marginBottom: "20px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Best Food In India
          </Typography>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#121619",
                color: "white",
                height: "50px",
                width: "180px",
                fontSize: "20px",
                "&:hover": {
                  backgroundColor: "#07090a",
                  transition: "0.3s ease-in",
                },
              }}
            >
              ORDER NOW
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
