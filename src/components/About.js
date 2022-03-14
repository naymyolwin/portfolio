import { Container, Typography, Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const About = ({ aboutRef }) => {
  const [aboutMe, setAboutMe] = useState([]);
  useEffect(() => {
    axios
      .get("https://naymyolwin-portfolio.herokuapp.com/get/datas")
      .then((response) => {
        setAboutMe(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        ref={aboutRef}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>
      <Box
        sx={{
          height: "5rem",
        }}
      ></Box>
      <Box>
        <Container>
          <Grid
            container
            spacing={1}
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid
              xs={6}
              item
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={aboutMe.length > 0 ? aboutMe[0].image : ""}
                width="300px"
                alt="it is me drinking coffee"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                {aboutMe.length > 0 && aboutMe[0].greeting}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
                {aboutMe.length > 0 && aboutMe[0].introduce}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
