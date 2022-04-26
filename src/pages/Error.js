import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Error = () => {
    const navigate = useNavigate();
  return (

    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px'
            }}
        >
            <Typography sx={{fontFamily: 'Montserrat'}} variant="h6">Unsuccessful, please try again</Typography>
            <Button onClick={() => navigate("/")} sx={{ fontFamily: 'Montserrat'}} variant="contained">Return to Homepage</Button>
            <Button onClick={() => navigate("/wallets")} sx={{ fontFamily: 'Montserrat'}} variant="outlined">Connect another Wallet</Button>
        </Box>
    </Box>
  )
}

export default Error