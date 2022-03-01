import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            marginBottom: "2rem",
          }}
        >
          Contact
        </Typography>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Name"
          sx={{
            margin: "1rem",
          }}
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Email"
          sx={{
            margin: "1rem",
          }}
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Message"
          multiline
          sx={{
            margin: "1rem",
          }}
        />
        <Container
          sx={{
            width: "100%",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            align="center"
            sx={{
              width: "80px",
              height: "40px",
              marginTop: "1rem",
              left: "50%",
              marginLeft: "-40px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#02373A",
            }}
            variant="contained"
          >
            Send
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default Contact;
