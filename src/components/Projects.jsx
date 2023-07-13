import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import adidas from "../assets/adidas.png";
import cult from "../assets/cult.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import portfolio from "../assets/portfolio.png";
import techcart from "../assets/techcart.png";
import readit from "../assets/readit.png";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box id="work" w="85%" m="auto" pt={{ base: "20", md: "40" }}>
      <Box textAlign="center">
        <Text fontSize="35px" fontWeight="600" color="#3f3f46">
          My Recent Work
        </Text>
        <Text color="#3f3f46">Here are some projects I've worked on.</Text>
      </Box>

      <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="38px" mt="8">
        {/* techkart */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px"
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          data-aos="zoom-in"
          borderRadius="lg"
        >
          <Box>
            <Image
              borderTopRadius="lg"
              src={techcart}
              alt="techcart"
              loading="lazy"
            />
          </Box>
          <Box p="5">
            <Text fontSize="22px" fontWeight="600">
              Techcart
            </Text>
            <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
              Techcart is leading E-commerce platforms selling a wide range of
              consumer electronic gadgets. This was a collabartive project with
              5 team members, completed in 5 days.
            </Text>
            <Flex
              mt="5"
              alignItems="center"
              flexFlow="wrap"
              gap="5"
              color="#446aa5"
              fontSize="15px"
            >
              <Text fontFamily="Space Grotesk">Javascript</Text>
              <Text fontFamily="Space Grotesk">React</Text>
              <Text fontFamily="Space Grotesk">Mongo db</Text>
              <Text fontFamily="Space Grotesk">Express</Text>
            </Flex>
            <Flex
              alignItems="center"
              mt="3"
              justifyContent="space-between"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Link
                href="https://github.com/shaileshwebdeveloper/Techcart-website"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link
                href="https://tech-cart-frontend.vercel.app/"
                target="_blank"
              >
                <i className="fa-solid fa-eye"></i>
              </Link>
            </Flex>
          </Box>
        </Box>

        {/* adidas */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px"
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          data-aos="zoom-in"
          borderRadius="lg"
        >
          <Box>
            <Image
              borderTopRadius="lg"
              src={adidas}
              alt="adidas"
              loading="lazy"
            />
          </Box>
          <Box p="5">
            <Text fontSize="22px" fontWeight="600">
              Adidas
            </Text>
            <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
              Adidas is a German multinational Sport Apparel and Footware
              company, There are differents types of sport wear are available on
              the website and it is famouse for its shoes.
            </Text>
            <Flex
              mt="5"
              alignItems="center"
              flexFlow="wrap"
              gap="5"
              color="#446aa5"
              fontSize="15px"
            >
              <Text fontFamily="Space Grotesk">HTML</Text>
              <Text fontFamily="Space Grotesk">CSS</Text>
              <Text fontFamily="Space Grotesk">Javascript</Text>
              <Text fontFamily="Space Grotesk">React</Text>
            </Flex>

            <Flex
              alignItems="center"
              mt="3"
              justifyContent="space-between"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Link
                href="https://github.com/VrushabhVeer/adidas"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link
                href="https://adidas-sportswear.netlify.app/"
                target="_blank"
              >
                <i className="fa-solid fa-eye"></i>
              </Link>
            </Flex>
          </Box>
        </Box>

        {/* readit */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px"
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          data-aos="zoom-in"
          borderRadius="lg"
        >
          <Box>
            <Image
              borderTopRadius="lg"
              w="100%"
              src={readit}
              alt="readit"
              loading="lazy"
            />
          </Box>
          <Box p="5">
            <Text fontSize="22px" fontWeight="600">
              Readit
            </Text>
            <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
              Readit is a blog writing website, On readit we can write our blog
              and we can publish it. here we can read other people's blogs, we
              can delete, update our blogs here.
            </Text>
            <Flex
              mt="5"
              alignItems="center"
              flexFlow="wrap"
              gap="5"
              color="#446aa5"
              fontSize="15px"
            >
              <Text fontFamily="Space Grotesk">HTML</Text>
              <Text fontFamily="Space Grotesk">CSS</Text>
              <Text fontFamily="Space Grotesk">Javascript</Text>
              <Text fontFamily="Space Grotesk">React</Text>
              <Text fontFamily="Space Grotesk">MongoDB</Text>
              <Text fontFamily="Space Grotesk">Express</Text>
            </Flex>

            <Flex
              alignItems="center"
              mt="3"
              justifyContent="space-between"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Link
                href="https://github.com/VrushabhVeer/Readit.git"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link href="https://readit-blogs.netlify.app" target="_blank">
                <i className="fa-solid fa-eye"></i>
              </Link>
            </Flex>
          </Box>
        </Box>

        {/* cultfit */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px"
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          data-aos="zoom-in"
          borderRadius="lg"
        >
          <Box>
            <Image borderTopRadius="lg" src={cult} alt="cult" loading="lazy" />
          </Box>
          <Box p="5">
            <Text fontSize="22px" fontWeight="600">
              Cultfit
            </Text>
            <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
              Cultfit is leading E-commerce platforms, where you can buy fitness
              and sport clothing and there are different functionalties
              available, this is my first project.
            </Text>
            <Flex
              mt="5"
              alignItems="center"
              flexFlow="wrap"
              gap="5"
              color="#446aa5"
              fontSize="15px"
            >
              <Text fontFamily="Space Grotesk">HTML</Text>
              <Text fontFamily="Space Grotesk">CSS</Text>
              <Text fontFamily="Space Grotesk">Javascript</Text>
            </Flex>
            <Flex
              alignItems="center"
              mt="3"
              justifyContent="space-between"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Link
                href="https://github.com/VrushabhVeer/CultFit"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link href="https://cultfitapp.netlify.app/" target="_blank">
                <i className="fa-solid fa-eye"></i>
              </Link>
            </Flex>
          </Box>
        </Box>

        {/* portfolio */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px"
          _hover={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          data-aos="zoom-in"
          borderRadius="lg"
        >
          <Box>
            <Image
              borderTopRadius="lg"
              src={portfolio}
              alt="portfolio"
              loading="lazy"
            />
          </Box>
          <Box p="5">
            <Text fontSize="22px" fontWeight="600">
              Portfolio
            </Text>
            <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
              It is My personel portfolio website, here you can find information
              about me, like the skills and the projects which I've worked on
              and the contact details etc.
            </Text>
            <Flex
              mt="5"
              alignItems="center"
              flexFlow="wrap"
              gap="5"
              color="#446aa5"
              fontSize="15px"
            >
              <Text fontFamily="Space Grotesk">Javascript</Text>
              <Text fontFamily="Space Grotesk">React</Text>
              <Text fontFamily="Space Grotesk">Chakra-UI</Text>
            </Flex>
            <Flex
              alignItems="center"
              mt="3"
              justifyContent="space-between"
              fontSize={{ base: "16px", md: "18px" }}
            >
              <Link
                href="https://github.com/VrushabhVeer/VrushabhVeer.github.io"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>

              <Link href="https://vrushabhveer.github.io" target="_blank">
                <i className="fa-solid fa-eye"></i>
              </Link>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
