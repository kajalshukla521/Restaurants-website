import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ size }) => {
  const [MobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!MobileOpen);
  };

  // Styles for navigation
  const navigationMenuStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const navigationMenuItemStyle = {
    margin: "0px 20px",
  };

  const navigationLinkStyle = {
    textDecoration: "none",
    color: "white",
  };

  // Mobile Navigation Styles
  const mobileNavigationLinkStyle = {
    textDecoration: "none",
    fontSize: "1.4rem",
    color: "black",
  };

  const activeLinkStyle = {
    color: "goldenrod",
    fontWeight: "bold",
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {[
          { path: "/Home", label: "Home" },
          { path: "/Allcategories", label: "All Categories" },
          { path: "/Menu", label: "Menu" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact" },
          {path: "/Addtocard", label: "Addtocard"},
        ].map(({ path, label }) => (
          <li style={{ marginTop: "20px" }} key={label}>
            <NavLink
              to={path}
              style={({ isActive }) =>
                isActive
                  ? { ...mobileNavigationLinkStyle, ...activeLinkStyle }
                  : mobileNavigationLinkStyle
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li style={{ marginTop: "20px" }}>
          <NavLink to="/Addtocard" style={mobileNavigationLinkStyle}>
            <Badge badgeContent={size} color="secondary">
              <ShoppingCartIcon />
            </Badge>{" "}
            Cart
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul style={navigationMenuStyle}>
                {[
                  { path: "/Home", label: "Home" },
                  { path: "/Allcategories", label: "All Categories" },
                  { path: "/Menu", label: "Menu" },
                  { path: "/about", label: "About" },
                  { path: "/contact", label: "Contact" },
                ].map(({ path, label }) => (
                  <li style={navigationMenuItemStyle} key={label}>
                    <NavLink
                      to={path}
                      style={({ isActive }) =>
                        isActive
                          ? { ...navigationLinkStyle, ...activeLinkStyle }
                          : navigationLinkStyle
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li style={navigationMenuItemStyle}>
                  <NavLink to="/Addtocard" style={navigationLinkStyle}>
                    <Badge badgeContent={size} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>{" "}
                    Cart
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={MobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
