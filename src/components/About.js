import { Container, Typography, Grid, Box } from "@mui/material";
import photo from "../images/photo.jpg";

const About = () => {
  return (
    <Box>
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
              <Typography variant="h2">
                Hi, I’m Nay. Nice to meet you.
              </Typography>
              <Typography variant="=p">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </Typography>
              <Typography>
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
