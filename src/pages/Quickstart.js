import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { ThemeProvider } from "styled-components";
import Dark from "../styles/Dark";
import { lightTheme, darkTheme } from "../styles/globalStyles";
import imageOne from "../Image/whitelist.png";
import imageTwo from "../Image/bridge.jpg";
import imageThree from "../Image/nft.png";
import imageFour from "../Image/stake.jpg";
import imageFive from "../Image/verify.png";
import imageSix from "../Image/Airdrop.png";
import { useNavigate } from "react-router-dom";

const Quickstart = () => {
  const navigate = useNavigate();
  const [theme] = Dark();
  const thememode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={thememode}>
      <Box paddingY={6} paddingBottom={12} paddingTop={12}>
        <Container>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            paddingBottom={4}
            variant="h6"
          >
            QuickStart
          </Typography>
          <div className="quickstart-grid">
            <div className="grid">
              <div className="grid-container">
                <button onClick={() => navigate("/wallets")} href="/wallets">
                  <div className="container">
                    <img src={imageOne} alt="whitelist" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      className="anchor"
                      variant="h6"
                    >
                      Join Whitelist
                    </Typography>
                  </div>
                </button>
              </div>
              <div className="grid-container">
                <a href="/wallets">
                  <div className="container">
                    <img src={imageFive} alt="validate" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      variant="h6"
                    >
                      Verify Wallet
                    </Typography>
                  </div>
                </a>
              </div>
              <div className="grid-container">
                <a href="/wallets">
                  <div className="container">
                    <img src={imageThree} alt="validate" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      className="anchor"
                      variant="h6"
                    >
                      Mint
                    </Typography>
                  </div>
                </a>
              </div>
              <div className="grid-container">
                <a href="/wallets">
                  <div className="container">
                    <img src={imageFour} alt="validate" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      variant="h6"
                    >
                      Stake
                    </Typography>
                  </div>
                </a>
              </div>
              <div className="grid-container">
                <a href="/wallets">
                  <div className="container">
                    <img src={imageTwo} alt="validate" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      variant="h6"
                    >
                      Token Bridge
                    </Typography>
                  </div>
                </a>
              </div>
              <div className="grid-container">
                <a href="/wallets">
                  <div className="container">
                    <img src={imageSix} alt="validate" />
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bolder",
                        fontFamily: "Poppins",
                      }}
                      variant="h6"
                    >
                      Airdrop
                    </Typography>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Quickstart;
