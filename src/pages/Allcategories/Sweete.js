// src/pages/SweetsPage.js
import React from "react";
import { Box, Typography } from "@mui/material";

const SweetsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sweets Category
      </Typography>
      <Typography variant="body1" align="center">
        Here you'll find a variety of sweets available in our restaurant.
      </Typography>
    </Box>
  );
};

export default SweetsPage;
