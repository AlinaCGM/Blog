import { Link } from "react-router-dom";
import "./hero.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Dish from "../../../assets/fish.jpg";
import im1 from "../../../assets/meat.jpg";
import im2 from "../../../assets/vegi.jpg";
import im3 from "../../../assets/dessert.jpg";
import im4 from "../../../assets/drinks.jpg";
import im5 from "../../../assets/veg.jpg";
import im6 from "../../../assets/cocktail.jpg";
import im7 from "../../../assets/pancake.jpg";
import im8 from "../../../assets/bocal.jpg";
import pepper from "../../../assets/pepper1.jpg";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        <Card
          sx={{
            width: {
              xs: "80%",
              sm: "40%",
              md: "20%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240, position: "relative" }}
            component="img"
            image={im1}
            alt="Paella dish"
          />
          <CardContent sx={{ height: "25%" }}>
            Whether you’re after sausages and burgers, chicken and fish, or
            those all-important sides, we’ve got you covered. Here are our best
            recipes.
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              xs: "80%",
              sm: "40%",
              md: "20%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240, position: "relative" }}
            component="img"
            image={im2}
            alt="Paella dish"
          />
          <CardContent sx={{ height: "25%" }}>
            Whether you want to mix up your usual rotation of vegetarian dinner
            recipes, we’re betting that you’ll find what you’re looking for
            here!
          </CardContent>
        </Card>
        <Card
          sx={{
            width: {
              xs: "80%",
              sm: "40%",
              md: "20%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240, position: "relative" }}
            component="img"
            image={im3}
            alt="Paella dish"
          />
          <CardContent sx={{ height: "25%" }}>
            We've included many desserts that are ready in under an hour , so
            you're not slaving away in the kitchen prepping a towering dessert
            all day long.
          </CardContent>
        </Card>

        <Card
          sx={{
            width: {
              xs: "80%",
              sm: "40%",
              md: "20%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240, position: "relative" }}
            component="img"
            image={im4}
            alt="Paella dish"
          />
          <CardContent sx={{ height: "25%" }}>
            Everyone has their preferences, but no matter whether your go-to is
            gin, tequila, or rye whiskey, the drinks listed here transcend
            predilection.
          </CardContent>
        </Card>
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
      {/* daily menu box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 5,
          marginBottom: "50px",
          marginInline: "auto",
        }}
      >
        {/* first card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginInline: "auto",
            width: {
              xs: "90%",
              sm: "90%",
              lg: "45%",
            },
            flexWrap: {
              xs: "wrap",
              sm: "noWrap",
            },
            borderBottom: {
              xs: "1px solid grey",
              sm: "none",
            },
            borderRight: {
              xs: "none",
              lg: "1px solid grey",
            },
          }}
        >
          <CardMedia
            sx={{
              width: {
                sm: "40%",
                md: "50%",
              },
            }}
            component="img"
            image={im6}
            alt="Paella dish"
          />
          <Typography sx={{ paddingInline: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            scelerisque felis sapien, et euismod dolor tincidunt vitae. Praesent
            porttitor, nunc nec feugiat rutrum, ligula ante volutpat lorem,
            sagittis pellentesque risus nibh vestibulum augue. Aenean id porta
            felis, a faucibus mauris. Etiam ultricies, orci eget interdum
            elementum, metus ante gravida enim, ac dignissim mauris nisl non
            nunc. Aliquam ac suscipit erat. Ut ut risus ante.
          </Typography>
        </Box>
        {/* second card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginInline: "auto",
            width: {
              xs: "90%",
              sm: "90%",
              lg: "45%",
            },
            flexWrap: {
              xs: "wrap",
              sm: "noWrap",
            },
          }}
        >
          <CardMedia
            sx={{
              width: {
                sm: "40%",
                md: "50%",
              },
            }}
            component="img"
            image={im5}
            alt="Paella dish"
          />
          <Typography sx={{ paddingInline: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            scelerisque felis sapien, et euismod dolor tincidunt vitae. Praesent
            porttitor, nunc nec feugiat rutrum, ligula ante volutpat lorem,
            sagittis pellentesque risus nibh vestibulum augue. Aenean id porta
            felis, a faucibus mauris. Etiam ultricies, orci eget interdum
            elementum, metus ante gravida enim, ac dignissim mauris nisl non
            nunc. Aliquam ac suscipit erat. Ut ut risus ante.
          </Typography>
        </Box>
        {/* third card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginInline: "auto",
            width: {
              xs: "90%",
              sm: "90%",
              lg: "45%",
            },
            flexWrap: {
              xs: "wrap",
              sm: "noWrap",
            },
          }}
        >
          <CardMedia
            sx={{
              width: {
                sm: "40%",
                md: "50%",
              },
            }}
            component="img"
            image={im7}
            alt="Paella dish"
          />
          <Typography sx={{ paddingInline: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            scelerisque felis sapien, et euismod dolor tincidunt vitae. Praesent
            porttitor, nunc nec feugiat rutrum, ligula ante volutpat lorem,
            sagittis pellentesque risus nibh vestibulum augue. Aenean id porta
            felis, a faucibus mauris. Etiam ultricies, orci eget interdum
            elementum, metus ante gravida enim, ac dignissim mauris nisl non
            nunc. Aliquam ac suscipit erat. Ut ut risus ante.
          </Typography>
        </Box>
        {/* fourth card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginInline: "auto",
            width: {
              xs: "90%",
              sm: "90%",
              lg: "45%",
            },
            flexWrap: {
              xs: "wrap",
              sm: "noWrap",
            },
          }}
        >
          <CardMedia
            sx={{
              width: {
                sm: "40%",
                md: "50%",
              },
            }}
            component="img"
            image={im8}
            alt="Paella dish"
          />
          <Typography sx={{ paddingInline: "5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            scelerisque felis sapien, et euismod dolor tincidunt vitae. Praesent
            porttitor, nunc nec feugiat rutrum, ligula ante volutpat lorem,
            sagittis pellentesque risus nibh vestibulum augue. Aenean id porta
            felis, a faucibus mauris. Etiam ultricies, orci eget interdum
            elementum, metus ante gravida enim, ac dignissim mauris nisl non
            nunc. Aliquam ac suscipit erat. Ut ut risus ante.
          </Typography>
        </Box>
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
