import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <Flex 
      as="section"
      id="home"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={{base: 8, md: 16}}
      mt={16}
      mb={32}>
        <Stack>
          <Box fontSize={{base: '3xl', md: '7xl'}}>
            {t("home.header_greet")}
            <Box color="blue.500" fontWeight={700}>{t("me")}</Box>
          </Box>
          <Box fontSize={{base: '2xl', md: '3xl'}}>
            {t("home.header_field")}
            <Box as="span" color="cyan.500" fontWeight={700}>
              {t("home.header_position")}
            </Box>
          </Box>
          <Box color="gray.500" maxWidth={{base: '100%', md: '50%'}}>
            {t("home.header_basic")}
          </Box>
          <Box>{t("home.lets_connect")}</Box>
          <Stack direction="row">
            <IconButton 
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/isaiah-collins-284a27185/">
              <FaLinkedinIn/>
            </IconButton>
            <IconButton
              as="a"
              target="_blank"
              href="https://www.github.com/icabetong">
              <FaGithub/>
            </IconButton>
            <IconButton 
              as="a"
              target="_blank" 
              href="https://www.twitter.com/icabetong">
              <FaTwitter/>
            </IconButton>
          </Stack>
        </Stack>
    </Flex>
  )
}

export default HomeSection;