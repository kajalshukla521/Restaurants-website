import React, { useState } from "react"; 
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
import Cheejcoresandwhich from "../../images/Cheejcore-sandwhich.jpeg";
import  cheejsandwhich from "../../images/cheejsandwhich.jpeg";
import DiwaniCheeseGrillSandwich from "../../images/Diwani Cheese Grill Sandwich.jpeg";
import chillicheesesandwich from "../../images/chillicheesesandwich.jpeg";
import tomatocucumbercheesesandwich from "../../images/tomatocucumbercheesesandwich.jpeg"; 
import chocolatsandwhich  from "../../images/chocolatsandwhich.jpeg";


// Sample data
const Cake = [
  {
    name: "Chocolate Cake",
    description: "Delicious chocolate cake made with premium ingredients.",
    image: Cheejcoresandwhich,
    price: 200,
  },
 
  {
    name: "Rasmalai Cake",
    description:"Soft and creamy Rasmalai flavored cake.",
    image:cheejsandwhich,
    price: 300,
  },
  {
    name: "Fresh Fruit Almond Cake",
    description: "A cake with fresh fruits and almonds.",
    image: chillicheesesandwich,
    price: 700,
  },
  {
    name: "Floral Fantasy Cake",
    description: "Beautifully decorated floral fantasy delight cake.",
    image:  DiwaniCheeseGrillSandwich,
    price: 600,
  },
  {
    name: "Motichoor Ladoo Cake",
    description: "Fusion of motichoor ladoo with creamy cake.",
    image: tomatocucumbercheesesandwich,
    price: 500,
  },
  
  {
    name: "Chocolate Cream Cake",
    description: "Heavenly drizzle of chocolate cream cake.",
    image:  chocolatsandwhich,
    price: 350,
  },
];

const Menu = () => {
  const [likedItems, setLikedItems] = useState(Array(Cake.length).fill(false));

  const handleLikeToggle = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
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

export default Menu;
