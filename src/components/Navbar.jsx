import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBag = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBag);

  return (
    <>
      <Box
        px={{ base: "6", md: "12" }}
        position="sticky"
        top="0"
        zIndex="9999"
        bg="white"
        w="100%"
        className={navbar ? "navScroll" : "navbar"}
      >
        <Flex
          h="70px"
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "row-reverse", md: "row" }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label={"Open Menu"}
              icon={<HamburgerIcon />}
              variant="ghost"
              _hover={{ variant: "ghost" }}
              size="lg"
              display={{ md: "none" }}
            />
            <MenuList fontSize={{ base: "15px", md: "16px" }}>
              <a href="#">
                <MenuItem>Home</MenuItem>
              </a>

              <a href="#about">
                <MenuItem>About</MenuItem>
              </a>

              <a href="#skills">
                <MenuItem>Skills</MenuItem>
              </a>

              <a href="#work">
                <MenuItem>Work</MenuItem>
              </a>

              <a href="#contact">
                <MenuItem>Contact</MenuItem>
              </a>

              <a
                href="https://drive.google.com/file/d/1W9aEytjML4jUyCecA6Gc5qbxNniy18dN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MenuItem>Resume</MenuItem>
              </a>
            </MenuList>
          </Menu>

          <HStack spacing={8} alignItems={"center"}>
            <a href="#">
              <Flex alignItems="center" gap="2px">
                <Image
                  w={{ base: "8", md: "9" }}
                  src="https://cdn-icons-png.flaticon.com/512/8970/8970877.png"
                  alt="v"
                  loading="lazy"
                />
                <Text
                  fontSize={{ base: "22px", md: "24px" }}
                  fontWeight="600"
                  color="#555a66"
                  mt="5px"
                >
                  rushabh.
                </Text>
              </Flex>
            </a>
          </HStack>

          <HStack
            as={"nav"}
            spacing={7}
            display={{ base: "none", md: "flex" }}
            letterSpacing="0.5px"
            fontSize="15px"
          >
            <Text>
              <a href="#">Home</a>
            </Text>

            <Text>
              <a href="#about">About</a>
            </Text>

            <Text>
              <a href="#skills">Skills</a>
            </Text>

            <Text>
              <a href="#work">Work</a>
            </Text>

            <Text>
              <a href="#contact">Contact</a>
            </Text>

            <Text>
              <a
                href="https://drive.google.com/file/d/1W9aEytjML4jUyCecA6Gc5qbxNniy18dN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
