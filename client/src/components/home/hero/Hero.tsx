import { Link } from "react-router-dom";
// import "./hero.css";
import { Box, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Container className="hero-container" sx={{ border: "1px solid red" }}>
      <Typography>
        Welcome to <br />
        <Typography>Food Blog</Typography>
      </Typography>
      <Box>
        <Typography>
          Expect new recipes weekly, with a mix of savory and sweet including{" "}
          <em>desserts, breakfasts, entrées, sides, snacks,</em> and more{" "}
          <Link to="/all-recipes">(find all recipes here).</Link> When you make
          one of our recipes we want you to say, “How was it that simple but
          still tastes that good?!”
        </Typography>
      </Box>
    </Container>
  );
};
export default Hero;
