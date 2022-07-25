import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Toogle = ({ theme, toggleTheme }) => {
  // console.log(theme)

  return (
    <div className="toggle">
      {/* <button onClick={() => toggleTheme()}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button> */}
    </div>
  );
};

export default Toogle;
