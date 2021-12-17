import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Flex,
  Text,
  SlideFade,
  useBreakpointValue,
  useColorMode
} from "@chakra-ui/react";
import { 
  HamburgerIcon, 
  CloseIcon,
  SunIcon,
  MoonIcon
} from "@chakra-ui/icons";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  const { colorMode } = useColorMode();

  return (
    <Text
      as="button"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight={500}
      color={colorMode === 'dark' ? "whiteAlpha.800" : "blackAlpha.800"}
      _hover={{
        color: 'blue.500',
        transition: 'all 500ms ease',
      }}
      {...rest}>
      <HashLink smooth to={`#${to}`}>{children}</HashLink>
    </Text>
  )
}

const Header = (props) => {
  const { t } = useTranslation();
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const animation = useBreakpointValue({base: true, md: false});
  const { colorMode } = useColorMode();

  const navigation = (
    <Box
      display={{ base: show ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      mt={8}>
      <Navigation />
    </Box>
  );

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="transparent"
      color={colorMode === 'dark' ? 'white' : 'black'}
      direction={{ base: 'column', md: 'row' }}
      {...props} >
      <Flex display={{ base: 'none', md: 'inline' }}>
        <Text ml={4} as="h4" fontWeight="bold" fontSize="lg">
          <HashLink smooth to="#">{t("me")}</HashLink>
        </Text>
      </Flex>

      <Box alignSelf="flex-end" display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      {animation ?
      <SlideFade in={show}>
        {navigation}
      </SlideFade>
      : navigation
      }
    </Flex>

  )
}

const Navigation = () => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        align={["center", "center", "center", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}>
        <MenuItems to="about">{t("navigation.about")}</MenuItems>
        <MenuItems to="works">{t("navigation.works")}</MenuItems>
        <MenuItems to="contact">{t("navigation.contact")}</MenuItems>
        <MenuItems>
          <Button 
            variant="link"
            onClick={() => toggleColorMode()}>
            {colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
          </Button>
        </MenuItems>
      </Flex>
    </>
  )
};

export default Header;