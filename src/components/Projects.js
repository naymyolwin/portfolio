import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import photo from "../images/photo.jpg";

const projects = [
  {
    title: "project title1",
    description: "project description1",
    githubLink: "https://github.com/",
    liveLink: "https://naymyolwin.github.io/portfolio/",
    imageUrl: "link to image location",
  },
  {
    title: "project title2",
    description: "project description2",
    githubLink: "https://github.com/",
    liveLink: "https://naymyolwin.github.io/portfolio/",
    imageUrl: "link to image location",
  },
  {
    title: "project title3",
    description: "project description2",
    githubLink: "https://github.com/",
    liveLink: "",
    imageUrl: "link to image location",
  },
];

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
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                imageUrl={photo}
              />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
