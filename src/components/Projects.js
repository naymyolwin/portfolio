import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectsRef }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        ref={projectsRef}
        sx={{
          position: "absolute",
          top: "-6rem",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: "5rem",
        }}
      >
        <Container>
          <Typography variant="h3" textAlign="center">
            Projects
          </Typography>
          <Grid container spacing={9} justifyContent="center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
