import { Box, Container, Typography } from "@mui/material";
import React from "react";

const skills = [
  { type: "HTML", level: 90 },
  { type: "CSS", level: 70 },
  { type: "JavaScript", level: 80 },
  { type: "Material UI", level: 80 },
  { type: "NextJS", level: 50 },
  { type: "NodeJS", level: 50 },
  { type: "ReactJS", level: 74 },
  { type: "Git", level: 60 },
  { type: "MongoDB", level: 50 },
  { type: "Firebase", level: 50 },
];

const Skills = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Container>
        <Typography variant="h3" textAlign="center">
          SKILLS
        </Typography>
        <ul
          style={{
            margin: "0 0 30px 0",
            padding: 0,
            width: "calc(100% - 50px)",
          }}
        >
          {skills.map((skill, index) => (
            <li
              key={skill.type}
              style={{
                display: "block",
                position: "relative",
                backgrounColor: "#888",
                color: "#fff",
                margin: "10px 0",

                width: `${skill.level}%`,
                backgroundColor: `hsl(${200}, ${200}%, ${
                  100 / (index + 3.5)
                }%)`,
              }}
            >
              <p
                style={{
                  padding: "10px",
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                {skill.type}
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    display: "inline-block",
                    width: "30px",
                    top: "11px",
                    textAlign: "right",
                    fontAeight: "normal",
                    color: "#fff",
                    fontSize: "11px",
                  }}
                >
                  {skill.level}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default Skills;
