import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import HomeSection from "./section/home";
import Header from "./components/header";
import AboutSection from "./section/about";
import WorksSection from "./section/works";
import ContactSection from "./section/contact";

const RootPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{xl: "1200px"}}
      minH="100vh"
      m="0 auto">
      <Header />
      <HomeSection/>
      <AboutSection/>
      <WorksSection/>
      <ContactSection/>
    </Flex>
  );
}

function Core() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootPage/>} exact/>
      </Routes>
    </HashRouter>
  );
}

export default Core;
