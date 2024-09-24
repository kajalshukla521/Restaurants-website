import React from "react";
import Layout from "../component/layout/Layout";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shiva from "../images/shiva.jpeg"


const About = () => {
  // Sample images and content for the cards
  const cardData = [
    {
      image: shiva,
      name: "Dish 1",
      description: shiva,
    },
    {
      image: shiva,
      description: "A delightful blend of flavors.",
    },
    {
      image: shiva,
      name: "Dish 3",
      description: "A favorite among our customers.",
    },
    {
      image: shiva,
      name: "Dish 4",
      description: "Perfect for any occasion.",
    },
  ];

  return (
    <Layout>
      <Box sx={{ my: 5, p: 2 }}>
        <Grid container spacing={4}>
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
            <img
              src={shiva}
              alt="Restaurant"
              style={{ width: "100%", borderRadius: "8px" }} 
            />
          </Grid>

          {/* Right Side - Paragraph */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Welcome To My Restaurant
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
              suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
              perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
              facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
              temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
              tempora maxime. Repellendus incidunt, maxime labore dolorum eos
              aperiam unde?
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              deserunt libero reprehenderit cum sint fugit cumque temporibus modi
              facere eveniet amet obcaecati ducimus harum velit maxime vel qui
              voluptatibus quam odio corrupti saepe.
            </Typography>
          </Grid>
        </Grid>

        {/* Cards Section */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <Slider dots={true} infinite={true} autoplay={true}>
                    <div>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt={card.name}
                      />
                    </div>
                  </Slider>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6">{card.name}</Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
