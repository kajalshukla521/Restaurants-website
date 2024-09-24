import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

// Import images
import chocolatecake from "../../images/chocolatecake.jpeg";

import Creamyrasmalaicake from "../../images/soft-and-creamy-rasmalai-cake.jpeg";
import floralfantasydelight from "../../images/floral-fantasy-delight.jpeg";
import freshfruitalmondcake from "../../images/fresh-fruit-almond-cake.jpeg";
import delishmotichoorladoocakehalf from "../../images/delish-motichoor-ladoo-cake-half.jpeg";
import heavenlydrizzlechocolatecreamcake from "../../images/heavenly-drizzle-chocolate-cream-cake .jpeg";

// Sample data
const Cake = [
  {
    name: "Chocolate Cake",
    description: "Delicious chocolate cake made with premium ingredients.",
    image: chocolatecake,
    price: 200,
  },

  {
    name: "Rasmalai Cake",
    description: "Soft and creamy Rasmalai flavored cake.",
    image: Creamyrasmalaicake,
    price: 300,
  },
  {
    name: "Fresh Fruit Almond Cake",
    description: "A cake with fresh fruits and almonds.",
    image: freshfruitalmondcake,
    price: 700,
  },
  {
    name: "Floral Fantasy Cake",
    description: "Beautifully decorated floral fantasy delight cake.",
    image: floralfantasydelight,
    price: 600,
  },
  {
    name: "Motichoor Ladoo Cake",
    description: "Fusion of motichoor ladoo with creamy cake.",
    image: delishmotichoorladoocakehalf,
    price: 500,
  },

  {
    name: "Chocolate Cream Cake",
    description: "Heavenly drizzle of chocolate cream cake.",
    image: heavenlydrizzlechocolatecreamcake,
    price: 350,
  },
];

const Menu = () => {
  const [likedItems, setLikedItems] = useState(Array(Cake.length).fill(false));
  const [addedToCart, setAddedToCart] = useState(
    Array(Cake.length).fill(false)
  ); // Track added items
  const navigate = useNavigate();

  const handleLikeToggle = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
  };

  const handleAddToCart = (index, menu) => {
    console.log("Navigating to Addtocard with:", menu);
    const newAddedToCart = [...addedToCart];
    newAddedToCart[index] = true; // Set the item as added to the cart
    setAddedToCart(newAddedToCart);
    navigate("/Addtocard", { state: { item: menu } });
  };

  const handleGoToCart = () => {
    navigate("/cart"); // Navigate to the cart page (adjust the route as per your app)
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Cake.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "400px", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component="img"
                image={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h6" color="textSecondary">
                  Price: ₹{menu.price}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px",
                }}
              >
                {/* Add to Cart Button */}
                <Button
                  sx={{
                    color: "white",
                    marginRight: 1,
                    background: "orange"
                  }}
                  onClick={() => handleAddToCart(index, menu)}
                  disabled={addedToCart[index]} // Disable if already added
                  variant="contained"
                >
                  <ShoppingCartSharpIcon sx={{ marginRight: 0.5 }} />
                  Add to Cart
                </Button>

                {/* Order Now Button */}
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginRight: "30px",
                  }}
                  onClick={() => console.log("Order Now clicked")} // No navigation on Order Now
                  variant="contained"
                >
                  Order Now
                </Button>

                {/* Like Icon on the right side */}
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 2, // Add space to the left of the icon
                  }}
                  onClick={() => handleLikeToggle(index)}
                >
                  {likedItems[index] ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </Box>
              </Box>

              {/* Display Go to Cart Button if the item is added */}
              {addedToCart[index] && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <Button
                    sx={{ color: "white", backgroundColor: "blue" }}
                    onClick={handleGoToCart}
                  >
                    Go to Cart
                  </Button>
                </Box>
              )}
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
