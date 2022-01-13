import React, { lazy, Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Center, CircularProgress, Flex } from "@chakra-ui/react";

const Header = lazy(() => import('./components/header'));
const Footer = lazy(() => import('./components/footer'));
const HomeSection = lazy(() => import('./sections/home'));
const AboutSection = lazy(() => import('./sections/about'));
const WorksSection = lazy(() => import('./sections/works'));
const ContactSection = lazy(() => import('./sections/contact'));

const Loader = () => {
  return (
    <Center>
      <CircularProgress/>
    </Center>
  );
}

const RootPage = () => {
  return (
    <Suspense fallback={Loader}>
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
    </Suspense>
  );
}

function Core() {
  return (
    <HashRouter>
      <Route path="/" component={RootPage} exact/>
    </HashRouter>
  );
}

export default Core;
