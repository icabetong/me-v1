import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";
import WorksSection from "./sections/works";
import ContactSection from "./sections/contact";
import history from "./shared/history";

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
      <Footer/>
    </Flex>
  );
}

function Core() {
  return (
    <HashRouter history={history}>
      <Route path="/" component={RootPage} exact/>
    </HashRouter>
  );
}

export default Core;
