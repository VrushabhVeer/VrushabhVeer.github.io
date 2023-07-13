import {
  Box,
  Text,
  Input,
  Textarea,
  Flex,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import contact from "../assets/contact.png";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wxh2k5a",
        "template_kkdqind",
        form.current,
        "nBJrRpoE8BDwEWUjm"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message Sent",
            description: "to veervrushabh@gmail.com",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toast = useToast();

  return (
    <Box id="contact" w="85%" m="auto" pt={{ base: "20", md: "40" }}>
      <Box textAlign="center">
        <Text fontSize="35px" fontWeight="600" color="#3f3f46">
          Get In Touch
        </Text>
        <Text color="#3f3f46">Reach me out Or Just say Hello!</Text>
      </Box>

      <Flex
        w="100%"
        gap={{ base: "0", md: "28" }}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%" data-aos="zoom-in">
          <Image w="100%" src={contact} alt="contact" loading="lazy" />
        </Box>

        <Box w="100%" data-aos="zoom-in">
          <form ref={form} onSubmit={sendEmail}>
            <Box>
              <Input
                position="static"
                fontSize={{ base: "15px", md: "16px" }}
                placeholder="Your name"
                name="user_name"
                size="lg"
              />
            </Box>

            <Box mt="6">
              <Input
                position="static"
                fontSize={{ base: "15px", md: "16px" }}
                placeholder="Email address"
                name="user_email"
                size="lg"
              />
            </Box>

            <Box mt="6">
              <Textarea
                position="static"
                fontSize={{ base: "15px", md: "16px" }}
                placeholder="Enter your message"
                name="message"
              />
            </Box>

            <Box mt="8">
              <Input
                onClick={() =>
                  toast({
                    title: "Sending",
                    duration: 2000,
                    isClosable: true,
                  })
                }
                type="submit"
                value="Send email"
                color="white"
                size="lg"
                fontSize="16px"
                cursor="pointer"
                border="none"
                backgroundImage= "linear-gradient(to right, #0019c3 , #9598ff)"
              />
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
