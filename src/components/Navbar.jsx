import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        p="1.5rem 5rem"
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            fontFamily="Montserrat"
            color={"#de4503"}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            prazZzwal
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={"1.7rem"}
          justifyContent="center"
          width={"30%"}
          ml="80px"
        >
          <FacebookIcon
            sx={{
              fontSize: "30px",
              opacity: "0.8",
              "&:hover": {
                cursor: "pointer",
                opacity: "1",
              },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "30px",
              opacity: "0.8",
              "&:hover": {
                cursor: "pointer",
                opacity: "1",
              },
            }}
          />
          <LinkedInIcon
            sx={{
              fontSize: "30px",
              opacity: "0.8",
              "&:hover": {
                cursor: "pointer",
                opacity: "1",
              },
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "30px",
              opacity: "0.8",
              "&:hover": {
                cursor: "pointer",
                opacity: "0.9",
              },
            }}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
          width={"20%"}
        >
          <Typography
            letterSpacing={"3px"}
            variant="h6"
            fontWeight={"bold"}
            sx={{
              opacity: "0.8",
              "&: hover": {
                cursor: "pointer",
                opacity: "1",
              },
            }}
            fontFamily="Montserrat"
            color={"#2C2B37"}
          >
            About Me
          </Typography>
          <Typography
            letterSpacing={"3px"}
            variant="h6"
            fontWeight={"bold"}
            sx={{
              opacity: "0.8",
              "&: hover": {
                cursor: "pointer",

                opacity: "1",
              },
            }}
            fontFamily="Montserrat"
            color={"#2C2B37"}
          >
            Contact
          </Typography>
        </Box>
      </Box>
      <hr className="nav-line" />
    </>
  );
};

export default Navbar;
