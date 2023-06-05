import { ThemeProvider } from "@emotion/react";
import React from "react";
import { mainTheme } from "../Themes";
import { Container, Typography, Stack, Box } from "@mui/material";
import { Button } from "react-native-web";
import './Projects.css';

const Projects = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container sx={{ marginTop: "100px", marginBottom: "50px" }}>
        <div>
          <Typography
            fontSize={45}
            fontWeight={"bold"}
            sx={{ color: "primary.main" }}
          >
            <p id="projects">Projects</p>
          </Typography>
        </div>
      </Container>
      <Container sx={{ marginBottom: "30px" }}>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Box
            component="button"
            sx={{
              mb: 3,
              p: 2,
              border: "1px dashed grey",
              backgroundColor: "primary.dark",
            }}
            width={250}
            height={70}
          >
            <a
              href="https://github.com/sheen404/medical-platform-frontend"
              target="_blank"
              className="clase4 clase3"
            >
              <Typography
                textAlign={"center"}
                fontSize={25}
                sx={{ color: "secondary.dark", marginBottom: "20px" }}
              >
                WeCare
              </Typography>
            </a>
          </Box>
          <Box
            component="button"
            sx={{
              p: 2,
              border: "1px dashed grey",
              backgroundColor: "primary.dark",
            }}
            width={250}
            height={70}
          >
            <a
              href="https://github.com/sheen404/EasyComm"
              target="_blank"
              className="clase4 clase3"
            >
            <Typography fontSize={25} sx={{ color: "secondary.dark" }}>
              EasyComm
            </Typography>
            </a>
          </Box>
          <Box
            component="button"
            sx={{
              p: 2,
              border: "1px dashed grey",
              backgroundColor: "primary.dark",
            }}
            width={250}
            height={70}
          >
            <a
              href="https://github.com/sheen404/med_covid"
              target="_blank"
              className="clase4 clase3"
            >
            <Typography fontSize={25} sx={{ color: "secondary.dark" }}>
              MedCovid
            </Typography>
            </a>
          </Box>
          <Box
            component="button"
            sx={{
              p: 2,
              border: "1px dashed grey",
              backgroundColor: "primary.dark",
            }}
            width={250}
            height={70}
          >
            <a
              href="https://github.com/sheen404/FreeLancelot"
              target="_blank"
              className="clase24 clase3"
            >
            <Typography fontSize={25} sx={{ color: "secondary.dark" }}>
              FreeLanceLot
            </Typography>
            </a>
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
