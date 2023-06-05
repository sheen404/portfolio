import { ThemeProvider } from "@emotion/react";
import React from "react";
import { mainTheme } from "../Themes";
import { Container, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container
        sx={{ marginTop: "100px", marginBottom: "50px" }}
        maxWidth="xl"
      >
        <div>
          <Divider sx={{ border: "1px dashed grey" }} />
          <Typography fontSize={20} sx={{ color: "primary.main", marginTop: "20px"}}>
            📍 Montreal, Canada
          </Typography>
          <Typography fontSize={20} sx={{ color: "primary.main", marginBottom: "10px"}}>
            ©️ Harsheen Kaur
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;
