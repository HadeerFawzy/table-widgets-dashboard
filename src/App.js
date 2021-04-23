import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { lightTheme, darkTheme } from "config/theme";
import Dashboard from "pages/dashboard";

const App = () => {
  const [themeToggle, setThemeToggle] = useState("dark");

  return (
    <ThemeProvider
      theme={
        themeToggle === "dark"
          ? createMuiTheme(darkTheme)
          : createMuiTheme(lightTheme)
      }
    >
      <Dashboard
        themeToggle={themeToggle}
        setThemeToggle={() =>
          setThemeToggle(themeToggle === "dark" ? "light" : "dark")
        }
      />
    </ThemeProvider>
  );
};

export default App;
