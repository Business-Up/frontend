import React, { useState, useContext, Suspense, lazy, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import LandingPage from "./components/home/LandingPage";
import ScrollTop from "./components/ui/ScrollTop";
// import { XlviLoader } from "react-awesome-loaders";
import "./components/ui/styles.css";

import { DarkThemeContext } from "./context/DarkThemeContext";
import { Routes, Route, useLocation } from "react-router-dom";

import { Presence } from "./components/animated";
// import { Loading } from './components/loading/Loading';
import "./components/ui/styles.css";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ContactMe from "./components/Contact/ContactMe";
import Project from "./components/projectmade/Project";
import ScrollToTop from "./components/ui/ScrollToTop";
import AboutMe from "./components/about/AboutMe";


function App(props) {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const { dt, t } = useContext(DarkThemeContext);
  const [darkTheme] = dt;
  const [themeM] = t;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeM}>
        <div
          style={{
            backgroundColor: darkTheme ? "#171C28" : "#FFFFFF",
            height: "100%",
            width: "100%",
          }}
        >
          <Presence exitBeforeEnter>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/projects" element={<Project />} />
              <Route exact path="/contact" element={<ContactMe />} />
              <Route exact path="/about" element={<AboutMe />} />
            </Routes>
          </Presence>
          <ScrollTop showBelow={120} />

           <Header
            {...props}
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <ScrollToTop /> 

          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
