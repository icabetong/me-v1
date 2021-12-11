import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const references = [
    { icon: FaGithub, target: 'https://www.github.com/icabetong' },
    { icon: FaLinkedinIn, target: 'https://www.linkedin.com/in/isaiah-collins-284a27185/' },
    { icon: FaEnvelope, target: 'mailto:isaiahcollins_02@live.com' },
    { icon: FaTwitter, target: 'https://www.twitter.com/icabetong' },
    { icon: FaInstagram, target: 'https://www.instagram.com/izayakorinzu/' },
  ]

  return (
    <Flex
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
      <Box my={4} textAlign="center">
        {t("footer.copyright")}
        <Box as="span" color="cyan.500">
          {'Isaiah Collins Abetong'}
        </Box>
        {t("footer.rights")}
      </Box>
    </Flex>
  );
}

export default Footer;