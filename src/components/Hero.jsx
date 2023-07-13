import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import dev from "../assets/developer.png";

const Hero = () => {
  return (
    <>
      <Flex
        id="hero"
        w="85%"
        m="auto"
        pt={[0, 10, 10]}
        alignItems="center"
        gap={{ base: "10", md: "20" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box w="100%">
          <Heading
            fontFamily="Poppins"
            fontSize="55px"
            fontWeight="700"
            color="#224e89"
          >
            Hello, I'am <span className="name">Vrushabh.</span>
          </Heading>
          <Heading
            fontFamily="Poppins"
            fontSize={{ base: "35px", md: "48px" }}
            fontWeight="medium"
            color="#3f3f46"
          >
            I build things for the web.
          </Heading>

          <Flex
            alignItems="center"
            gap="1.5"
            _hover={{ color: "#446aa5", gap: "2" }}
            color="#3f3f46"
            mt="5"
            w="140px"
            fontSize={{base:"15px", md:"16px"}}
          >
            <a href="#about">
              <Text>About Me</Text>
            </a>
            <Text mt="2px">
              <i className="fa-solid fa-angle-right" />
            </Text>
          </Flex>
        </Box>
        <Box w="100%">
          <Image w="100%" src={dev} alt="intro" loading="lazy" />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
