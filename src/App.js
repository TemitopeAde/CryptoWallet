import "./App.css";
import Home from "./home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Wallet from "./Wallet";
import Form from "./pages/form";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/globalStyles";
import Dark from "./styles/Dark";
import Toogle from "./styles/Toggle";
import Success from "./pages/Success";


function App() {
  const [theme, toggleTheme] = Dark();
  const thememode = theme === "light" ? lightTheme : darkTheme;
  console.log(theme)
  return (
    <ThemeProvider theme={thememode}>
      <Toogle theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/wallets" element={<Wallet />}></Route>
          <Route path="/forms" element={<Form />}></Route>
          <Route path="/success-page" element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
