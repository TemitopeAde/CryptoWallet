import React from "react";
import Dark from "./styles/Dark";
import Toogle from "./styles/Toggle";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/globalStyles";
import Quickstart from "./pages/Quickstart";
import Hero from "./Hero";
import HomeImage from "./HomeImage";
import Wallet from "./Wallet";
import Counter from "./Counter";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box } from "@mui/system";


const Home = () => {


  return (
    <Box>
      <GlobalStyles />
     

      <Hero />
      <HomeImage />
      <Quickstart />
      <Counter />
    </Box>
  );
};

export default Home;
