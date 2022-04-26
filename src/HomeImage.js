import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import banner from "./Image/banner.png";

const HomeImage = () => {
  return (
    <Box
      paddingY={6}
      paddingX={2}
      sx={{
        borderBottom: "1.5px solid #000",
      }}
    >
      <Container>
        <img src={banner} alt="banner" />
      </Container>
    </Box>
  );
};

export default HomeImage;
