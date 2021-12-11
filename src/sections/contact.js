import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Flex, Text, } from "@chakra-ui/react";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <Flex
      as="section"
      id="contact"
      align="center"
      justify="center"
      w="100%"
      p={16}>
      <Flex
        w="90%"
        align="center"
        justify="space-between"
        borderRadius="md"
        bgColor="blue.800"
        shadow="2px 2px 16px #2D3748"
        px={16}
        py={8}>
        <Box
          w="30%"
          fontSize="4xl"
          fontWeight="semibold">
          {t("contact.get_in_touch")}
        </Box>
        <Box w="10%"/>
        <Text w="40%">
          {t("contact.get_in_touch_body")}
        </Text>
        <Box w="20%"/>
        <Button 
          as="a"
          href="mailto:isaiahcollins_02@live.com"
          target="_blank"
          w="20%" 
          minHeight={16}
          variant="solid"
          colorScheme="blue">
          {t("contact.say_hello")}
        </Button>
      </Flex>
    </Flex>
  );
}

export default ContactSection;