import React from "react";
import { Link } from "react-router-dom";
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
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight={500}
      {...rest}
    >
      <Link to={to}>{children}</Link>
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
      as="nav"
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
          <Link to="/">{t("me")}</Link>
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
        <MenuItems to="/">{t("navigation.about")}</MenuItems>
        <MenuItems to="/works">{t("navigation.works")}</MenuItems>
        <MenuItems to="/contact">{t("navigation.contact")}</MenuItems>
      </Flex>
    </>
  )
};

export default Header;