import { Container, Typography, Grid, Box } from "@mui/material";
import photo from "../images/photo.jpg";

const About = ({ aboutRef }) => {
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
              <img src={photo} width="300px" alt="it is me drinking coffee" />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                Hi, I’m Nay. Nice to meet you.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              >
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              >
                And I do this magic from a sunny island in the south of Thailand
                with a cup of coffee.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
