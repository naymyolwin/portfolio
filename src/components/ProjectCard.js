import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import photo from "../images/photo.jpg";

const ProjectCard = () => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          width="200"
          image={photo}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Github</Button>
          <Button>Live Link</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
