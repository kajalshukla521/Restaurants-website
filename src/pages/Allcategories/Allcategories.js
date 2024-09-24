import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Box, CardActions, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import sweets from "../../images/sweets.jpeg";
import cookie from "../../images/cookie.jpeg";
import cake from "../../images/cake.jpeg";
import icecream from "../../images/icecream.jpeg";
import pasta from "../../images/pasta.jpeg";
import sandwhich from "../../images/sandwhich.jpeg";


// Sample data for categories
const categories = [
  { id: 1, name: "Sweets", image: sweets, path: "/sweets" },
  { id: 2, name: "Cookies", image: cookie, path: "/cookies" },
  { id: 3, name: "Cake", image: cake, path: "/cake" },
  { id: 4, name: "Ice-cream", image: icecream, path: "/icecream" },
  { id: 5, name: "Pasta", image: pasta, path: "/pasta" },
  { id: 6, name: "Sandwich", image: sandwhich, path: "/sandwich" },
];

const RestaurantCategories = () => {
  return (
    <Layout>
      <CardActionArea>
       
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Restaurant Categories
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={6} key={category.id}>
              <Link to={category.path} style={{ textDecoration: "none" }}>
                <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <CardMedia
                    component="img"
                    image={category.image}
                    alt={category.name}
                    sx={{ width: 150, height: 100, borderRadius: 1 }}
                  />
                  <CardContent>
                    <Typography variant="h6">{category.name}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      </CardActionArea>
    </Layout>
  );
};

export default RestaurantCategories;
