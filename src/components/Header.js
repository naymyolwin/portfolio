import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const menus = ["home", "about", "skills", "projects", "contact"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const menuClick = (menu) => {
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
    console.log(menu);
  };

  const handleOpenNavMenu = (event) => {
    console.log("open");
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("close");
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#02373A",
        height: "64px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menus.map((menu) => (
                <MenuItem
                  key={menu}
                  onClick={() => {
                    handleCloseNavMenu();
                    menuClick(menu);
                  }}
                >
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menus.map((menu) => (
              <Button
                key={menu}
                onClick={() => menuClick(menu)}
                sx={{
                  color: "whitesmoke",
                }}
              >
                {menu}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
