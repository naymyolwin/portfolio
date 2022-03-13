import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const ProjectCard = ({
  title,
  description,
  githubLink,
  liveLink,
  imageUrl,
}) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          width="200"
          image={imageUrl}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={githubLink}
            underline="hover"
            target="_blank"
            rel="noopener"
            marginRight={2}
          >
            Github
          </Link>
          {liveLink && (
            <Link
              href={liveLink}
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              Live Link
            </Link>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
