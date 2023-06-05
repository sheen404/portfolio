import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import I from "../assets/images/I.png";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "../Themes";
import "./AboutMe.css";
import Typewriter from "typewriter-effect";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";
import { Send } from "@mui/icons-material";

const AboutMe = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <Container maxWidth="xl" sx={{ backgroundColor: "primary.dark" }}>
          <Stack
            direction={"row"}
            spacing={10}
            justifyContent={"space-between"}
            sx={{ marginTop: "30px", marginRight: "10px" }}
          >
            <Box
              sx={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "10px",
              }}
            >
              <img className="element" src={I} width={250}></img>
            </Box>
            <Grid container direction="column" justifyContent={"center"}>
              <Typography
                fontSize={23}
                sx={{ marginBottom: "30px", marginTop: "80px" }}
              >
                Hello! 👋
              </Typography>

              <div className="main-text">
                <Container maxWidth={300} sx={{ marginBottom: "50px" }}>
                  <h1>
                    <Box height={120}>
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              "I'm a Software Developer and a Master's student at Concordia University. "
                            )
                            .pauseFor(1000)
                            .typeString(
                              " An Innovative problem solver with expertise in latest tech, creating impactful solutions and making a significant impact."
                            )
                            .start();
                        }}
                      />
                    </Box>
                  </h1>
                </Container>
              </div>
              <Stack direction={"column"} spacing={5}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Box
                    className="center"
                    component="span"
                    sx={{ p: 2, border: "1px dashed grey" }}
                    width={250}
                    height={50}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      spacing={5}
                    >
                      <a
                        href="https://www.facebook.com/harsheen.sachdeva/"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="Facebook"
                          sx={{ color: "primary.main" }}
                          size="large"
                        >
                          <Facebook sx={{ fontSize: "30px" }} />
                        </IconButton>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/harsheen-kaur-243a7918b/"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="LinkedIn"
                          sx={{ color: "primary.main" }}
                          size="large"
                        >
                          <LinkedIn sx={{ fontSize: "30px" }} />
                        </IconButton>
                      </a>
                      <a href="https://github.com/sheen404" target="_blank">
                        <IconButton
                          aria-label="Github"
                          sx={{ color: "primary.main" }}
                          size="large"
                        >
                          <GitHub sx={{ fontSize: "30px" }} />
                        </IconButton>
                      </a>
                    </Stack>
                  </Box>
                </Stack>
                <Box>
                  <Button
                    onClick={() =>
                      (window.location = "mailto:harsheenkaur99@gmail.com")
                    }
                    variant="contained"
                    startIcon={<Send />}
                    size="large"
                    sx={{ backgroundColor: "secondary.dark" }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default AboutMe;
