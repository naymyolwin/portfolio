import {
  Button,
  Container,
  Modal,
  TextField,
  Typography,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import sendBtn from "../images/send.svg";
import axios from "axios";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#02373A",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#02373A",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#02373A",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#02373A",
    },
  },
});

const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const buttonContent = (
    <React.Fragment>
      Send
      <img src={sendBtn} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    axios
      .post("https://naymyolwin-portfolio.herokuapp.com/send/email", {
        params: {
          name: name,
          email: email,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setAlert({
          open: true,
          message: "message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "something went worng, please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        ref={contactRef}
        sx={{
          position: "absolute",
          top: "-6rem",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: "5rem",
          padding: "0 2rem",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              marginBottom: "2rem",
            }}
          >
            Contact
          </Typography>
          <CssTextField
            fullWidth
            required
            label="Name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            sx={{
              margin: "1rem 0",
            }}
          />
          <CssTextField
            onChange={onChange}
            value={email}
            fullWidth
            required
            id="email"
            label="Email"
            helperText={emailHelper}
            error={emailHelper.length !== 0}
            sx={{
              margin: "1rem 0",
            }}
          />
          <CssTextField
            value={message}
            id="message"
            onChange={(event) => setMessage(event.target.value)}
            multiline
            rows={3}
            fullWidth
            placeholder="Tell me more about your project"
            sx={{
              margin: "1rem 0",
            }}
          />
          <Container
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              align="center"
              sx={{
                width: "150px",
                height: "40px",
                marginTop: "1rem",
                left: "50%",
                marginLeft: "-75px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#02373A",
                "&:hover": {
                  backgroundColor: "rgba(2, 55, 58, 0.9 )",
                },
              }}
              variant="contained"
              onClick={() => setOpen(true)}
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                emailHelper.length !== 0
              }
            >
              {buttonContent}
            </Button>
          </Container>
        </Container>
      </Box>

      <Modal
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",

            boxShadow: 24,
            p: 4,
          }}
        >
          <Container>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{
                marginBottom: "2rem",
              }}
            >
              Confirm
            </Typography>
            <CssTextField
              fullWidth
              required
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              sx={{
                margin: "1rem 0",
              }}
            />
            <CssTextField
              onChange={onChange}
              value={email}
              fullWidth
              required
              id="email"
              label="Email"
              helperText={emailHelper}
              error={emailHelper.length !== 0}
              sx={{
                margin: "1rem 0",
              }}
            />
            <CssTextField
              value={message}
              id="message"
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={3}
              fullWidth
              placeholder="Tell me more about your project"
              sx={{
                margin: "1rem 0",
              }}
            />
            <Container
              align="center"
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}
                sx={{
                  width: "100px",
                  height: "40px",
                  margin: "1rem",
                  color: "white",
                  ":hover": {
                    color: "#02373A",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#02373A",
                  "&:hover": {
                    borderColor: "rgba(2, 55, 58, 1 )",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  width: "100px",
                  height: "40px",
                  margin: "1rem",

                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#02373A",
                  "&:hover": {
                    backgroundColor: "rgba(2, 55, 58, 0.9 )",
                  },
                }}
                variant="contained"
                onClick={onConfirm}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0
                }
              >
                {loading ? <CircularProgress size={30} /> : buttonContent}
              </Button>
            </Container>
          </Container>
        </Box>
      </Modal>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={3000}
      />
    </Box>
  );
};

export default Contact;
