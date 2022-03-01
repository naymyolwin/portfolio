import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const menus = ["home", "about", "skills", "projects", "contact"];

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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography sx={{ position: "fixed", left: "100px" }}>
            LOGO
          </Typography>
          <Box>
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
