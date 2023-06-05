import { ThemeProvider } from "@emotion/react";
import { Container, Typography, Stack } from "@mui/material";
import React from "react";
import { mainTheme } from "../Themes";
import CircularProgress from "../UI/CircularProgress";
import react from "../assets/images/react.png";
import javascript from "../assets/images/js.png";
import java from "../assets/images/java.png";
import flutter from "../assets/images/flutter.png";
import dart from "../assets/images/dart.png";
import c from "../assets/images/c++.png";
import android from "../assets/images/android.png";
import python from "../assets/images/python.png";

const Skills = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container sx={{ marginTop: "140px" }}>
        <div>
          <Typography
            fontSize={45}
            fontWeight={"bold"}
            sx={{ color: "primary.main" }}
          >
            <p id="skills">Skills</p>
          </Typography>
        </div>
      </Container>
      <Container sx={{ marginTop: "50px" }}>
        <Stack direction={"column"} sx={{ marginBottom: "50px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={react} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={85}
                color="#46a4b6"
              />
            </Stack>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={javascript} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={80}
                color="#46a4b6"
              />
            </Stack>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={java} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={95}
                color="#46a4b6"
              />
            </Stack>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={flutter} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={75}
                color="#46a4b6"
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            sx={{ marginTop: "50px" }}
          >
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={dart} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={75}
                color="#46a4b6"
              />
            </Stack>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={android} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={60}
                color="#46a4b6"
              />
            </Stack>
            <Stack direction={"column"} spacing={3} justifyContent={"center"}>
              <img src={python} height={80} width={80} />
              <CircularProgress
                size={100}
                strokeWidth={20}
                percentage={35}
                color="#46a4b6"
              />
            </Stack>
          </Stack>
        </Stack>
        {/* <CircularProgress
          size={120}
          strokeWidth={20}
          percentage={25}
          color="#46a4b6"
        /> */}
      </Container>
    </ThemeProvider>
  );
};

export default Skills;
