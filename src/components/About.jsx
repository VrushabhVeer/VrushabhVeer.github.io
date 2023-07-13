import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import about from "../assets/about.png";
import resume from "../assets/Vrushabh Veer-Resume.pdf";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Flex
        id="about"
        w="85%"
        m="auto"
        pt={{ base: "20", md: "40" }}
        gap={{ base: "10", md: "20" }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%" data-aos="zoom-in">
          <Image src={about} alt="about" loading="lazy" />
        </Box>
        <Box w="100%" data-aos="zoom-in">
          <Text fontSize="25px" fontWeight="600" color="#3f3f46">
            Vrushabh Veer
          </Text>
          <Text color="tomato" fontWeight="500">
            <i>Full Stack Developer</i>
          </Text>
          <Text mt="5" color="#3f3f46">
            Self-motivated developer and Creative person who is interested in
            building user-friendly products. Extremely motivated to constantly
            develop technical skills and grow professionally. and looking
            forward to working in a challenging role that leads to the
            organization's overall growth and development.
          </Text>

          <a href={resume} download>
            <Button class="button-87" role="button">
              Checkout My Resume
            </Button>
          </a>
        </Box>
      </Flex>
    </>
  );
};

export default About;
