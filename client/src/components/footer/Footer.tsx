import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Typography } from "@mui/material";
import "./footer.css";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  marginBlock: "20px",
};

function Footer() {
  return (
    <Box
      style={{
        paddingTop: "50px",
        width: "90%",
        marginInline: "auto",
        marginTop: "70px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 50,
          paddingBottom: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid black",
        }}
        className="footer-icon"
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" className="slogan">
            FIND US
          </Typography>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="food-blog">Food Blog</span>
          </Link>
        </Box>
        <Box>
          <Typography variant="h5" className="slogan">
            Simple Recipes{" "}
          </Typography>
          <Typography variant="h5" className="slogan">
            That Make You Feel Good
          </Typography>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
        className="footer-section1"
      >
        <Box className="footer-column">
          <Typography style={{ paddingBlock: "20px" }} variant="h5">
            ABOUT
          </Typography>

          <Link to="/about" style={linkStyle}>
            About Us
          </Link>

          <Link to="/all-recipes" style={linkStyle}>
            All Recipes
          </Link>

          <Link to="/registration" style={linkStyle}>
            Register
          </Link>

          <Link to="/login" style={linkStyle}>
            Log In
          </Link>
        </Box>
      </Box>
      <Box
        style={{ paddingTop: "40px", paddingBottom: "10px" }}
        className="footer-section2"
      >
        <Box className="footer-copyright">
          Copyright &#169; Food Blog | Created by Alina
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
