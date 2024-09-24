import React, { useState } from "react"; // Import useState
import Layout from "../component/layout/Layout";
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
import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujrati.jpeg";
import Noodles from "../images/noodles.jpeg";

import Frenchfries from "../images/frenchfries.jpeg";

const MenuList = [
  {
    name: "Dosa",
    description: "Lorem ipsum dolor sit amet.",
    image: Dosa,
    price: 200,
  },
  {
    name: "Chola",
    description: "Lorem ipsum dolor sit amet.",
    image: Chola,
    price: 250,
  },
  {
    name: "Idli Sambhar",
    description: "Lorem ipsum dolor sit amet.",
    image: Idli,
    price: 300,
  },
  {
    name: "Masala Dosa",
    description: "Lorem ipsum dolor sit amet.",
    image: MasalaDosa,
    price: 100,
  },
  {
    name: "Paneer",
    description: "Lorem ipsum dolor sit amet.",
    image: Paneer,
    price: 400,
  },
  {
    name: "Gujrati",
    description: "Lorem ipsum dolor sit amet.",
    image: Gujrati,
    price: 500,
  },
  {
    name: "Frenchfries",
    description: "Lorem ipsum dolor sit amet.",
    image: Frenchfries,
    price: 400,
  },
  {
    name: "Noodles",
    description: "Lorem ipsum dolor sit amet.",
    image: Noodles,
    price: 500,
  },
];

const Menu = () => {
  const [likedItems, setLikedItems] = useState(
    Array(MenuList.length).fill(false)
  );

  // Define the handleLikeToggle function
  const handleLikeToggle = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "300px", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ShoppingCartSharpIcon sx={{ marginRight: 1 }} />
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Buy Now
                </Button>
                <Box
                  sx={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleLikeToggle(index)} // Pass the index
                >
                  {likedItems[index] ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </Box>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

// Ensure proper export
export default Menu;
