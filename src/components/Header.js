import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const menus = ["home", "about", "skills", "projects", "contact"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [menu, setMenu] = useState("");

  useEffect(() => {
    menu === "about" &&
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    menu === "skills" &&
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    menu === "projects" &&
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    menu === "home" &&
      homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
    menu === "contact" &&
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [menu, homeRef, aboutRef, skillsRef, projectsRef, contactRef]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (menu) => {
    setAnchorElNav(null);
    setMenu(menu);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#02373A",
        height: "64px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "absolute",
            right: "3rem",
          }}
        >
          <IconButton
            size="large"
            aria-label="list of menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {menus.map((menu) => (
              <MenuItem key={menu} onClick={() => handleCloseNavMenu(menu)}>
                <Typography>{menu}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            width: "100%",
          }}
        >
          {menus.map((menu) => (
            <Button
              key={menu}
              onClick={() => setMenu(menu)}
              sx={{
                color: "whitesmoke",
              }}
            >
              {menu}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
