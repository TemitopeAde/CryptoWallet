import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import { Container } from "@mui/material";
import { ThemeProvider } from "styled-components";
import Dark from "./styles/Dark";
import { lightTheme, darkTheme } from "./styles/globalStyles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Counter = () => {
  const navigate = useNavigate();
  const [theme] = Dark();
  const thememode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={thememode}>
      <Box
        className="counter"
        paddingY={12}
        sx={{
          borderTop: "1.5px solid #000",
        }}
      >
        <Container>
          <Typography textAlign={"center"} paddingBottom={3} variant="h5">
            Distribution
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  textAlign={"center"}
                  variant="h6"
                >
                  <CountUp end={70} duration={5} delay={2} />
                  K+
                </Typography>
                <Typography textAlign={"center"} variant="body1">
                  active wallets
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  textAlign={"center"}
                  variant="h6"
                >
                  <CountUp end={250} duration={5} delay={3} />
                  K+
                </Typography>
                <Typography textAlign={"center"} variant="body1">
                  active wallets
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  textAlign={"center"}
                  variant="h6"
                >
                  <CountUp end={120} duration={5} delay={3} />
                  K+
                </Typography>
                <Typography textAlign={"center"} variant="body1">
                  active wallets
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box paddingY={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "35px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">
                Ready to resolve your blockchain issues? We are here to provide
                help.
              </Typography>
              <Box>
                <Button
                  sx={{ 
                    width: "200px",
                    background: 'rgba(40,50,250,.8)'
                  }}
                  variant="contained"
                  size="large"
                  className="btn-large"
                  onClick={() => navigate("/wallets")}
                >
                  Get Started
                </Button>
              </Box>

              <Box
                sx={{width: '30%', margin: '0 auto'}}
              >
                <Box>
                  <Grid container>
                    <Grid xs={3} item>
                      <Button>
                          
                      </Button>
                    </Grid>
                    <Grid xs={3} item>
                      <Button>
                          
                      </Button>
                    </Grid>
                    <Grid xs={3} item>
                      <Button>
                        
                      </Button>
                    </Grid>
                    <Grid xs={3} item>
                      <Button>
                        
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Typography sx={{fontSize: '16px', fontFamily: 'Montserrat'}} variant="h6">WalletConnect ©{new Date().getFullYear()} All rights reserved.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Counter;
