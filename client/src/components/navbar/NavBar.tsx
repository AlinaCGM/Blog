import React, { useState } from "react";
import { styled, Button, IconButton, Badge, BadgeProps } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

function NavBar(props: Props) {
  const user = useSelector((state: RootState) => state.user.user);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const favState = useSelector((state: RootState) => state.favorite.favorites);
  const LoginBTN = styled(Button)({
    textDecoration: "none",
    color: "#3a3939",
    border: "1px solid grey",

    "&:hover": {
      backgroundColor: "#fff",
      color: "black",
      border: "1px solid black",
    },
  });

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      backgroundColor: "none",
    },
  }));
  const linkStyle = {
    textDecoration: "none",
    color: "#201f1f",
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      style={{ height: "100%" }}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="nav-container"
    >
      <Typography
        className="logo-first"
        textAlign="center"
        variant="h6"
        sx={{ my: 2 }}
      >
        <span>LOGO</span>
      </Typography>
      <Divider />
      <List>
        <Link style={linkStyle} to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>HOME</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={linkStyle} to="/all-recipes">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>ALL RECIPES</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={linkStyle} to="/about">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>ABOUT</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={linkStyle} to="/logIn">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>LOG IN</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={linkStyle} to="/registration">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>REGISTER</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100px",
                width: "100%",
              },
            }}
          >
            <Link style={linkStyle} to="/">
              HOME
            </Link>
            <Link style={linkStyle} to="/all-recipes">
              ALL RECIPES
            </Link>
            <Link style={linkStyle} to="/about">
              ABOUT
            </Link>
          </Box>
          <Box
            className="navbar-center"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-around",
                width: "50%",
              },
            }}
          >
            <Link style={linkStyle} to="/">
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </Link>
          </Box>
          <Box
            className="navbar-right"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-around",

                width: "100%",
                alignItems: "center",
                height: "100px",
              },
            }}
          >
            <Link style={linkStyle} to="/favorites">
              <StyledBadge badgeContent={favState.length} color="error">
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </StyledBadge>
            </Link>
            <Link style={linkStyle} to={isLogin ? "/" : "/registration"}>
              {isLogin ? "Welcome to Food Blog" : "REGISTER"}
            </Link>
            <Link style={linkStyle} to={isLogin ? "/user" : "/login"}>
              <StyledBadge
                badgeContent={user.isAdmin && isLogin ? "A" : null}
                color="info"
              >
                <LoginBTN>{isLogin ? user.firstName : "LOG IN"}</LoginBTN>
              </StyledBadge>
            </Link>
          </Box>
        </Box>
      </Toolbar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
