import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../assets/images/Logo.png";
import { createTheme, ThemeProvider, colors } from "@mui/material";
import { mainTheme } from "../Themes";
import Stack from "@mui/material/Stack";
import './CustomAppBar.css';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.contrastText" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={Logo}
              x={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              width={350}
            />
            <Container maxWidth="xl">
              <Stack direction={"row"} justifyContent={"end"}>
                <Button size="large" sx={{ fontSize: 18 }}>
                  <a href="#skills" class="clase2 clase">Skills</a>
                </Button>
                <Button size="large" sx={{ fontSize: 18 }}>
                  <a href="#workExp" class="clase2 clase">Work Experience</a>
                </Button>
                <Button size="large" sx={{ fontSize: 18 }}>
                  <a href="#projects" class="clase2 clase">Projects</a>
                </Button>
                <Button size="large" sx={{ fontSize: 18 }}>
                  <a href="#publication" class="clase2 clase">Publications</a>
                </Button>
                <Button size="large" sx={{ fontSize: 18 }}>
                  <a href="https://drive.google.com/file/d/1xeuNBldbJAKAA_YGjo0nGpBkzdqBQRbc/view?usp=sharing" target="_blank" class="clase2 clase">
                    CV
                    </a>
                </Button>
              </Stack>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
