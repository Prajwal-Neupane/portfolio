import { Box, Typography } from "@mui/material";
import React from "react";
// import Button from "@mui/material/Button";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Logo from "../Assets/arrow.png";
const Hero = () => {
  return (
    <Box
      width={"50%"}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      margin="auto"
      mt={"5rem"}
      gap={"2.5rem"}
    >
      <Box>
        <Typography
          variant="h4"
          fontFamily={"Montserrat"}
          color="secondary"
          fontWeight={"500"}
        >
          Hey there, I'm Prajwal
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h2"
          fontWeight={"bold"}
          color="#2C2B37"
          fontFamily={"Montserrat"}
          textAlign="center"
        >
          Freelance Web Designer & Developer
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color={"rgba(150, 16, 22, 60%)"}
          textAlign={"center"}
        >
          I create web designs and implement in development for the clients. If
          you’re looking for this kind of role, Congratulations !! You just
          found the best one out there😊
        </Typography>
      </Box>
      <Box className="hero_button_container">
        <button fontFamily={"Montserrat"} className="hero_button">
          Take a tour
        </button>
        <img className="hero_button_icon" src={Logo} alt="arrow" />
      </Box>
    </Box>
  );
};

export default Hero;
