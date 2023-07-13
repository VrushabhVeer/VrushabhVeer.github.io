import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import git from "../assets/git.png";
import redux from "../assets/redux.png";
import mongodb from "../assets/mongo.png";
import express from "../assets/express.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <Box
      id="skills"
      w={{ base: "80%", md: "75%" }}
      m="auto"
      pt={{ base: "20", md: "40" }}
      textAlign="center"
    >
      <Text fontSize="35px" fontWeight="600" color="#3f3f46">
        My Skills
      </Text>
      <Text color="#3f3f46">This are the some of my major skills.</Text>

      <SimpleGrid
        columns={[2, 3, 3, 4, 6]}
        spacing={["30px", "20px", "45px"]}
        mt="8"
      >
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={html}
            alt="html"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            HTML
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image w={{ base: "50%", md: "45%" }} m="auto" src={css} alt="css" />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            CSS
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image w={{ base: "50%", md: "45%" }} m="auto" src={js} alt="js" />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Javascript
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={react}
            alt="react"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            React
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={redux}
            alt="redux"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Redux
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1677968586/Portfolio/skills/chakraui.png"
            alt="chakra ui"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Chakra UI
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={bootstrap}
            alt="bootstrap"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Bootstrap
          </Text>
        </Box>
        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={postman}
            alt="postman"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Postman
          </Text>
        </Box>

        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={github}
            alt="github"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Github
          </Text>
        </Box>

        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image w={{ base: "50%", md: "45%" }} m="auto" src={git} alt="git" />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            Git
          </Text>
        </Box>

        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={mongodb}
            alt="mongodb"
            objectFit="contain"
            h="7vh"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            MongoDB
          </Text>
        </Box>

        <Box
          p="5"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          data-aos="zoom-in-up"
          bg="#eceff9"
          borderRadius="md"
        >
          <Image
            w={{ base: "50%", md: "45%" }}
            m="auto"
            src={express}
            objectFit="contain"
            h="7vh"
            alt="express"
          />
          <Text mt="5" color="#3f3f46" fontSize={{ base: "14px", md: "16px" }}>
            express
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
