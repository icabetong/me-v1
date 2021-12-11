import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import {
  Box,
  Flex,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props;

  return (
    <Text
      as="button"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight={500}
      color="whiteAlpha.800"
      borderBottom='2px'
      borderColor="gray.800"
      _hover={{
        borderBottom: '2px',
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
  const iconColor = useBreakpointValue({ base: "white", md: "blue.500" })

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["blue.500", "blue.500", "transparent", "transparent"]}
      color={["white", "white", "blue.500", "blue.500"]}
      {...props} >
      <Flex align="center" color={iconColor}>
        <Text ml={4} as="h4" fontWeight="bold" fontSize="lg">
          <HashLink smooth to="#">{t("me")}</HashLink>
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}>
        <Navigation />
      </Box>
    </Flex>
  )
}

const Navigation = () => {
  const { t } = useTranslation();

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
      </Flex>
    </>
  )
};

export default Header;