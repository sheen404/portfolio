import { Typography, Container, ThemeProvider } from "@mui/material";
import React from "react";
import { mainTheme } from "../Themes";

const WorkExp = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container sx={{ marginTop: "150px", marginBottom: "50px"}}>
        <div>
          <Typography
            fontSize={45}
            fontWeight={"bold"}
            sx={{ color: "primary.main" }}
          >
            <p id="workExp">
            Work Experience
            </p>
          </Typography>
        </div>
      </Container>
      <Container maxWidth="xl">
        <Typography textAlign={"left"} fontSize={30} sx={{color: "primary.main"}}>
            <ol style={{ listStyleType: 'disc' }}>
                <li>Software Developer at Quantel</li>
            </ol>
        </Typography>
        <Typography textAlign={"left"} fontSize={25} sx={{color: "secondary.dark", marginLeft: "30px", marginBottom: "30px"}}>
            My major responsibilites included constructing an application to facilitate university students' access to guidance/mentorship from experts, raising user engagement by 15%,
            developing a unique platform using React, HTML, Javascript and CSS utilizing cutting-edge UI/animations, resulting in a 25% increase of users and integrating frontend with backend for 
            expansive list of events, internships & startups; generated average monthly visits of 20K+.
        </Typography>
        <Typography textAlign={"left"} fontSize={30} sx={{color: "primary.main"}}>
            <ol style={{ listStyleType: 'disc' }}>
                <li>Software Application Developer Intern at IRSC</li>
            </ol>
        </Typography>
        <Typography textAlign={"left"} fontSize={25} sx={{color: "secondary.dark", marginLeft: "30px", marginBottom: "30px"}}>
            I developed an application based for Android supported mobiles to provide assistance to people on road in case of emergencies, 
            break-down of vehicles and mechanical assistance, using Google Maps to get live location of user and assistance staff and developing 
            the front-end based on UI provided.
        </Typography>
        <Typography textAlign={"left"} fontSize={30} sx={{color: "primary.main"}}>
            <ol style={{ listStyleType: 'disc' }}>
                <li>Data Analytics Intern at Nokia</li>
            </ol>
        </Typography>
        <Typography textAlign={"left"} fontSize={25} sx={{color: "secondary.dark", marginLeft: "30px", marginBottom: "60px"}}>
            This internship role included using the Data Analytics method to process raw data and collect significant data, device Penetration Estimation using the MySQL framework,
            calculating the percentage of subscribers for various frequency bands for 3G, LTE, VOLTE and CA, calculating the proportion of all bands' subscribers together, calculation 
            of the top 15 devices supporting VOLTE and LTE with a percentage share for each telecommunications vendor
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default WorkExp;
