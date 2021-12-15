import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { 
  Box, 
  Button, 
  Flex, 
  IconButton, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Spacer, 
  Stack 
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";  
import i18next from "i18next";
import locales from "../shared/locales";
import { getLocale } from "../shared/tools";

const Footer = () => {
  const { t } = useTranslation();
  const references = [
    { icon: FaGithub, target: 'https://www.github.com/icabetong' },
    { icon: FaLinkedinIn, target: 'https://www.linkedin.com/in/isaiah-collins-284a27185/' },
    { icon: FaEnvelope, target: 'mailto:isaiahcollins_02@live.com' },
    { icon: FaTwitter, target: 'https://www.twitter.com/icabetong' },
    { icon: FaInstagram, target: 'https://www.instagram.com/izayakorinzu/' },
  ]

  const onChangeLocale = (locale) => {
    window.localStorage.setItem('i18nextLng', locale);
    i18next.changeLanguage(locale);
  }

  return (
    <Flex
      w="100%"
      as="footer"
      direction="column"
      minHeight="10vh"
      align="center"
      justifyContent="center"
      p={4}>

      <Stack
        direction="row">
        {references.map((reference) => {
          return (
            <IconButton
              rel="noopener"
              role="link"
              key={reference.target}
              variant="link"
              as="a"
              target="_blank"
              href={reference.target}
              py={2}
              _hover={{
                backgroundColor: "blue.800",
                transition: 'all 500ms ease'
              }}>
              {React.createElement(reference.icon, { size: 24 })}
            </IconButton>
          )
        })}
      </Stack>
      <Flex
        w="100%"
        align="center"
        direction={{base: "column", md: "row"}}
        justify={{base: "center", md: "space-between"}}>
        <Box my={4} textAlign="center" fontSize="sm">
          <Trans
            i18nKey="footer.copyright"
            values={{ me: t("me_complete") }}
            components={{
              focus: <Box as="span" color="cyan.500"/>
            }}/>
        </Box>
        <Spacer/>
        <Menu>
          <MenuButton
            size="sm"
            as={Button}
            rightIcon={<ChevronUpIcon/>}>
            {t(getLocale(`locales.${i18next.language}`))}
          </MenuButton>
          <MenuList>
          { locales.map((locale) => (
            <MenuItem
              key={locale}
              onClick={() => onChangeLocale(locale)}>
                {t(`locales.${locale}`)}
            </MenuItem>
          ))
          }
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Footer;