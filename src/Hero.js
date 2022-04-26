import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <Box
      paddingY={10}
      className="banner"
      sx={{
        borderBottom: "1.5px solid #000",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            
          }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              textAlign: "center",
              fontFamily: "Montserrat",
            }}
            variant="h4"
          >
            WalletConnect
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              width: '80%',
              margin: '0 auto'
            }}
          >
            WalletConnect is an open-source protocol that allows your wallet to
            connect and interact with DApps and other wallets. WalletConnect
            establishes an encrypted connection between your wallet and the
            DApp. The protocol also has push notification capabilities to notify
            users of incoming transactions.
          </Typography>

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <button
              style={{ marginRight: "20px", cursor: "pointer" }}
              className="btn-large"
              onClick={() => navigate("/wallets")} 
            >
              Connect Wallet
            </button>
            <button onClick={() => navigate("/wallets")}  style={{ cursor: "pointer" }} className="btn-large">
              Collab.Join
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
