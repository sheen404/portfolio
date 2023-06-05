import React from "react";
import CustomAppBar from "./CustomAppBar";
import AboutMe from "./AboutMe";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "../Themes";
import { Container } from "@mui/material";
import "./MainScreen.css";
import Skills from "./Skills";
import { Image, ScrollView, Text } from "react-native";
import WorkExp from "./WorkExp";
import Projects from "./Projects";
import Publication from "./Publication";
import Footer from "./Footer";

const MainScreen = () => {
  return (
    <ScrollView>
      <ThemeProvider theme={mainTheme}>
        <div className="background-grey">
          <CustomAppBar />
          <AboutMe />
          <Skills />
          <WorkExp />
          <Projects />
          <Publication />
          <Footer />
        </div>
      </ThemeProvider>
    </ScrollView>
  );
};

export default MainScreen;
