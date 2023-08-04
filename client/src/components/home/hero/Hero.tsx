import { Link } from "react-router-dom";
// import "./hero.css";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import Dish from "../../../assets/back5.png";
import im1 from "../../../assets/im1.jpg";
import im2 from "../../../assets/im2.jpg";
import im3 from "../../../assets/im3.jpg";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

const Hero = () => {
  return (
    <Box className="hero-container" sx={{ width: "90%", margin: "auto" }}>
      <CardMedia component="img" width="90%" image={Dish} alt="Paella dish" />
      <Typography
        variant="h5"
        sx={{
          color: " #000000",
          fontSize: {
            xs: "18px",
            sm: "26px",
            lg: "36px",
          },
          fontWeight: "normal",
          marginBlock: {
            xs: 2,
            sm: 5,
          },
        }}
      >
        Welcome to my food blog
      </Typography>
      <Box sx={{ width: "100%", display: "flex", gap: "10px", margin: "auto" }}>
        <CardMedia
          component="img"
          image={im1}
          alt="Paella dish"
          sx={{
            height: {
              xs: "60px",
              sm: "120px",
              md: "180px",
              lg: "230px",
            },
          }}
        />
        <CardMedia
          component="img"
          image={im2}
          alt="Paella dish"
          sx={{
            height: {
              xs: "60px",
              sm: "120px",
              md: "180px",
              lg: "230px",
            },
          }}
        />
        <CardMedia
          component="img"
          image={im3}
          alt="Paella dish"
          sx={{
            height: {
              xs: "60px",
              sm: "120px",
              md: "180px",
              lg: "230px",
            },
          }}
        />
      </Box>
      <Box sx={{ width: "90%" }}>
        <Typography
          sx={{
            marginBlock: "20px",
            lineHeight: "15px",
            textAlign: "start",
            marginInline: "auto",
            fontSize: {
              xs: "14px",
              sm: "18px",
              md: "18px",
              lg: "18px",
            },
          }}
        >
          Expect new recipes weekly, with a mix of savory and sweet including{" "}
          <em>desserts, breakfasts, entrées, sides, snacks,</em> and more{" "}
          <Link to="/all-recipes">(find all recipes here).</Link> When you make
          one of our recipes we want you to say, “How was it that simple but
          still tastes that good?!”
        </Typography>
      </Box>
    </Box>cd 
  );
};
export default Hero;
