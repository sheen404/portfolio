import { ThemeProvider } from "@emotion/react";
import React from "react";
import { mainTheme } from "../Themes";
import { Container, Typography, Stack, Box } from "@mui/material";

const Publication = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container sx={{ marginTop: "70px", marginBottom: "50px" }}>
        <div>
          <Typography
            fontSize={45}
            fontWeight={"bold"}
            sx={{ color: "primary.main" }}
          >
            <p id="publication">
            Publications
            </p>
          </Typography>
        </div>
      </Container>
      <Container sx={{ marginBottom: "30px" }} maxWidth="xl">
        <Typography>
          <ol style={{ listStyleType: "disc" }}>
            <li>
              <Typography
                textAlign={"left"}
                fontSize={25}
                sx={{ color: "secondary.dark" }}
              >
                International Conference on Cognitive & Intelligent Computing
                (ICCIC 2021)&nbsp;
                <a href="https://link.springer.com/chapter/10.1007/978-981-19-2358-6_4" target="_blank">
                   (https://link.springer.com/chapter/10.1007/978-981-19-2358-6_4)
                </a>
              </Typography>
            </li>
          </ol>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default Publication;
