import { Container, IconButton, Typography, Box } from "@mui/material";
import Typical from "react-typical";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BG from "../images/BG1.jpg";
//import { useRef } from "react";

const Home = ({ aboutRef }) => {
  //const about = useRef();
  //   const buttonClick = () => {
  //     console.log("test");
  //     about.scrollIntoView({ behavior: "smooth" });
  //   };

  return (
    <Box
      style={{
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${BG})`,
      }}
    >
      <Container
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            width: "100%",
            position: "absolute",
            top: "40%",
            left: "50%",
            marginLeft: "-50%",
            color: "whitesmoke",
          }}
        >
          <Typical
            steps={[
              "My name is Nay Myo Lwin ",
              1000,
              "and i'm a web developer ",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </Typography>

        <IconButton
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          align="center"
          sx={{
            backgroundColor: "grey",
            width: "80px",
            height: "80px",
            top: "90%",
            left: "50%",
            marginLeft: "-40px",
            alignItems: "center",
            justifyContent: "center",
            color: "whitesmoke",
          }}
        >
          <KeyboardArrowDownIcon
            sx={{
              fontSize: "3rem",
            }}
          />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Home;
