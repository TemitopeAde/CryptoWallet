import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

const Content = () => {
  return (
    <Container>
      <Box>
        <Box paddingY={1}>
          <Box paddingY={2}>
            <Typography variant="h4">What is WalletConnect</Typography>
            <Typography variant="body1">
              WalletConnect is an open source protocol for connecting
              decentralised applications to mobile wallets with QR code scanning
              or deep linking. A user can interact securely with any Dapp from
              their mobile phone, making WalletConnect wallets a safer choice
              compared to desktop or browser extension wallets.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4">How does it work?</Typography>
            <Typography variant="body1">
              WalletConnect connects web applications to supported{" "}
              <a href="/">mobile wallets</a>. WalletConnect session is started
              by a scanning a QR code (desktop) or by clicking an application
              deep link (mobile).
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h4">Wallets</Typography>
          <Typography variant="body1">
            Multiple iOS and Android wallets support the WalletConnect protocol.
            Interaction between mobile apps and mobile browsers are supported
            via mobile deep linking.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
