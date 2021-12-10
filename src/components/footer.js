import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";
import { 
  FaGithub,
  FaEnvelope,
  FaLinkedinIn, 
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

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
          <IconButton 
            variant="link"
            as="a"
            target="_blank"
            href="https://www.github.com/icabetong"
            py={2}
            _hover={{
              backgroundColor: "gray.600"
            }}>
            <FaGithub size={24}/>
          </IconButton>
          <IconButton 
            variant="link"
            as="a"
            target="_blank"
            href="https://www.linkedin.com/in/isaiah-collins-284a27185/"
            py={2}
            _hover={{
              backgroundColor: "gray.600"
            }}>
            <FaLinkedinIn size={24}/>
          </IconButton>
          <IconButton 
            variant="link"
            as="a"
            target="_blank"
            href="mailto:isaiahcollins_02@live.com"
            py={2}
            _hover={{
              backgroundColor: "gray.600"
            }}>
            <FaEnvelope size={24}/>
          </IconButton>
          <IconButton 
            variant="link"
            as="a"
            target="_blank"
            href="https://www.twitter.com/icabetong"
            py={2}
            _hover={{
              backgroundColor: "gray.600"
            }}>
            <FaTwitter size={24}/>
          </IconButton>
          <IconButton 
            variant="link"
            as="a"
            target="_blank"
            href="https://www.instagram.com/izayakorinzu/"
            py={2}
            _hover={{
              backgroundColor: "gray.600"
            }}>
            <FaInstagram size={24}/>
          </IconButton>
      </Stack>
      <Box my={4}>
        {t("about.footer_copyright")}
      </Box>
    </Flex>
  );
}

export default Footer;