import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Box, Button, Flex, IconButton, Stack, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HomeSection = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Flex 
      as="section"
      id="home"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      wrap="no-wrap"
      minH="70vh"
      px={{base: 8, md: 16}}
      mt={16}
      mb={32}>
        <Stack spacing={4}>
          <Box fontSize={{base: '4xl', md: '7xl'}}>
            <Trans
              i18nKey="home.header_greet"
              values={{ me: t("me") }}
              components={{
                focus: <Box color="blue.500" fontWeight={700}/>
              }}/>
          </Box>
          <Box fontSize={{base: '2xl', md: '3xl'}}>
            <Trans
              i18nKey="home.header_field"
              values={{ position: t("position") }}
              components={{
                focus: <Box as="span" color="cyan.500" fontWeight={700}/>
              }}/>
          </Box>
          <Box color={colorMode === 'dark' ? "gray.400" : "gray.600"} maxWidth={{base: '100%', md: '50%'}}>
            {t("home.header_basic")}
          </Box>
          <Button
            width="xs"
            as="a"
            href="https://github.com/icabetong/portfolio/raw/main/assets/resume.pdf"
            rel="noopener"
            colorScheme="blue">
            {t("home.read_my_resume")}
          </Button>
          <Box>{t("home.lets_connect")}</Box>
          <Stack direction="row">
            <IconButton 
              as="a"
              target="_blank"
              role="link"
              rel="noopener"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/isaiah-collins-284a27185/">
              <FaLinkedinIn/>
            </IconButton>
            <IconButton
              as="a"
              target="_blank"
              role="link"
              rel="noopener"
              aria-label="GitHub"
              href="https://www.github.com/icabetong">
              <FaGithub/>
            </IconButton>
            <IconButton 
              as="a"
              target="_blank" 
              role="link"
              rel="noopener"
              aria-label="Twitter"
              href="https://www.twitter.com/icabetong">
              <FaTwitter/>
            </IconButton>
          </Stack>
        </Stack>
    </Flex>
  )
}

export default HomeSection;