import { Box, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box className="App">
      {loading ? (
        <Flex
          h="100vh"
          className="loader"
          alignItems="center"
          justifyContent="center"
          gap="5"
          bg="#f6f8ff"
          flexDirection={{ base: "column", md: "row" }}
        >
          <PulseLoader
            color={"#3470e4"}
            loading={loading}
            size={21}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <Text fontSize={{ base: "15px", md: "16px" }}>
            Content is loading
          </Text>
        </Flex>
      ) : (
        <Box>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Box>
      )}
    </Box>
  );
}

export default App;
