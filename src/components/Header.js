import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
  const menus = ["home", "about", "skills", "projects", "contact"];

  const menuClick = () => {
    console.log("button");
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#02373A",
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
                onClick={menuClick}
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
