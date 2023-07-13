import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  Image,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsMessenger } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  const { hasCopied, onCopy } = useClipboard("veervrushabh@gmail.com");

  return (
    <Box w="100%" m="auto" bg="#18181b" color="#e0e7ff">
      <Flex
        w="100%"
        alignItems="center"
        gap={{ base: "10", md: "0" }}
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        mt="12"
        p="10"
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Flex
            alignItems="center"
            justifyContent={{ base: "center", md: "start" }}
            gap="2px"
          >
            <Image
              w={{ base: "8", md: "9" }}
              src="https://cdn-icons-png.flaticon.com/512/8970/8970877.png"
              alt="v"
              loading="lazy"
            />
            <Text
              fontSize={{ base: "22px", md: "24px" }}
              fontWeight="600"
              color="#a1d3ff"
              mt="5px"
            >
              rushabh.
            </Text>
          </Flex>
          <Text mt="3" fontSize={{ base: "15px", md: "16px" }}>
            Reach me out for collaborations or just a friendly hello!
          </Text>
          <Text mt="1" fontSize={{ base: "15px", md: "16px" }}>
            mail me on{" "}
            <Tooltip
              fontSize="14px"
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              <Link ml="1" color="#407bff" onClick={onCopy}>
                veervrushabh@gmail.com
              </Link>
            </Tooltip>
          </Text>
        </Box>

        <Box alignItems="center" gap="5" fontSize="22px">
          <Text fontSize="25px" fontWeight="600" textAlign="center">
            Reach Me
          </Text>

          <HStack
            align="center"
            justify="space-around"
            direction={{ base: "row", md: "column" }}
          >
            <Link href="https://github.com/VrushabhVeer" target="_blank">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="2xl"
                icon={<BsGithub />}
                _hover={{
                  bg: "#3f4956",
                  color: "white",
                }}
                isRound
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/vrushabh-veer"
              target="_blank"
            >
              <IconButton
                fontSize="2xl"
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>

            <Link href="#contact">
              <IconButton
                fontSize="2xl"
                aria-label="message"
                variant="ghost"
                size="lg"
                icon={<BsMessenger />}
                _hover={{
                  bg: "#ff5555",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>

            <Link href="tel:+919767428263">
              <IconButton
                aria-label="mobile"
                variant="ghost"
                size="lg"
                fontSize="2xl"
                icon={<MdPhone />}
                _hover={{
                  bg: "#4ad295",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
          </HStack>
        </Box>
      </Flex>

      <Box borderTop="1px solid #545454" p="4">
        <Text textAlign="center" fontSize="14px">
          2023, Made By Vrushabh Veer.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
