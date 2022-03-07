import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Skills = ({ skillsRef }) => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("https://naymyolwin-portfolio.herokuapp.com/get/skills")
      .then((response) => {
        setSkills(response.data);
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
        ref={skillsRef}
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
              <Box
                key={skill.type}
                sx={{
                  backgroundColor: "#eee",
                  margin: "0 2rem",
                }}
              >
                <li
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
              </Box>
            ))}
          </ul>
        </Container>
      </Box>
    </Box>
  );
};

export default Skills;
