import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { WalletInfo } from "./data";
import { useNavigate } from "react-router-dom";


const Wallet = () => {
  const navigate = useNavigate();
  const {info} = WalletInfo 
  return (
    <Box style={{background: 'ghostwhite'}} className="wallet-address-container">
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            textAlign: "center",
          }}
          paddingY={6}
        >
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'bolder'}} variant="h6">Connect Wallet</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat'}}>
            Open protocol for connecting Wallets to Dapps
          </Typography>
        </Box>
        <Container>
          <div className="app-grid">
            {info.map((item) => {
              return (
                <div className="apps-grid">
                  <div className="apps" onClick={() => navigate("/forms")}>
                    <img src={item.img} alt={item.name} />
                    <Typography
                      sx={{ fontSize: "0.73rem", fontWeight: "bold", fontFamily: 'Montserrat' }}
                      variant="h6"

                    >
                      {item.name}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default Wallet;
