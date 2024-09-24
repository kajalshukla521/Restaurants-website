// src/pages/AddToCard.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

const AddToCard = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Load selected item from local storage
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('selectedCake'));
    if (item) {
      setSelectedItem(item);
      addToCart(item); // Automatically add it to the cart
    }
  }, []);

  // Function to add item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  // Function to calculate the total price
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to remove item from cart
  const removeFromCart = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter(Boolean)
    );
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add to Cart
      </Typography>

      <Grid container spacing={3}>
        {/* List of selected item */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Selected Item</Typography>
          {selectedItem ? (
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{selectedItem.name}</Typography>
                <Typography variant="body2">{`Price: ₹${selectedItem.price}`}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(selectedItem)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Typography>No item selected.</Typography>
          )}
        </Grid>

        {/* Cart */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Your Cart</Typography>
          {cart.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            <Card variant="outlined">
              <CardContent>
                <List>
                  {cart.map((item) => (
                    <ListItem key={item.name}>
                      <ListItemText
                        primary={item.name}
                        secondary={`₹${item.price} x ${item.quantity}`}
                      />
                      <ListItemSecondaryAction>
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => removeFromCart(item.name)}
                        >
                          Remove
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Total Price: ₹{getTotalPrice()}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddToCard;
