import { Link } from "react-router-dom";
import "./hero.css";
import { Box, CardMedia, Typography } from "@mui/material";
import Dish from "../../../assets/fish.jpg";
import im1 from "../../../assets/im1.jpg";
import im2 from "../../../assets/im2.jpg";
import im3 from "../../../assets/im3.jpg";
import pepper from "../../../assets/pepper.png";

const Hero = () => {
  return (
    <Box className="hero-container" sx={{ width: "90%", margin: "auto" }}>
      <Box>
        <CardMedia
          component="img"
          width="90%"
          image={Dish}
          alt="Paella dish"
          sx={{
            position: "relative",
            height: {
              xs: "20vh",
              sm: "40vh",
              md: "60vh",
            },
          }}
        />
        <Box
          sx={{
            // backgroundColor: "rgb(172, 191, 197, 0.2)",
            position: "absolute",
            top: {
              xs: "70px",
              sm: "20%",
              md: "25%",
              lg: "20%",
            },
            right: {
              xs: "13%",
              sm: "10%",
              md: "10%",
              lg: "15%",
            },
            borderBottom: "1px solid #5a6e88",
            padding: "5px",
          }}
        >
          <Typography
            className="header"
            sx={{
              color: " #374659",
              fontSize: {
                xs: "26px",
                sm: "52px",
                md: "60px",
                lg: "85px",
              },
              fontFamily: "Dancing Script",
            }}
          >
            Let's cook !
          </Typography>
          <Typography
            className="header2"
            sx={{
              fontFamily: " Josefin Sans",
              color: " #374659",
              lineHeight: {
                xs: "14px",
                sm: "24px",
                md: "40px",
                lg: "36px",
              },
              fontSize: {
                xs: "14px",
                sm: "24px",
                md: "32px",
                lg: "34px",
              },
            }}
          >
            Find Peace Of Mind <br />
            in The Kitchen
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h5"
        sx={{
          color: " #000000",
          fontFamily: " Josefin Sans",
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
        Find you own perfect recipe
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
      <Box sx={{ width: "90%", marginInline: "auto" }}>
        <Typography
          sx={{
            marginBlock: {
              xs: "18px",
              sm: "30px",
              md: "36px",
              lg: "50px",
            },
            lineHeight: {
              xs: "18px",
              sm: "20px",
              md: "26px",
              lg: "32px",
            },
            textAlign: "justify",

            fontSize: {
              xs: "14px",
              sm: "20px",
              md: "22px",
              lg: "28px",
            },
            fontFamily: " Josefin Sans",
          }}
        >
          Expect new recipes weekly, with a mix of savory and sweet including{" "}
          <em>desserts, breakfasts, entrées, sides, snacks,</em> and more{" "}
          <Link to="/all-recipes"> here .</Link> When you make one of our
          recipes we want you to say, “How was it that simple but still tastes
          that good?!”
        </Typography>
      </Box>
      <Box>
        <CardMedia
          component="img"
          image={pepper}
          alt="Paella dish"
          sx={{
            height: {
              xs: "70px",
              sm: "120px",
              md: "180px",
              lg: "280px",
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default Hero;
