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
        w={{base: '100%', md: '90%'}}
        direction={{base: "column", md: "row"}}
        align="center"
        justify={{base: 'center', md: "space-between"}}
        borderRadius="md"
        bgColor="blue.800"
        shadow="2px 2px 16px #2D3748"
        px={{base: 8, md: 16}}
        py={8}>
        <Box
          w={{base: '100%', md: '30%'}}
          fontSize="4xl"
          fontWeight="semibold"
          textAlign="center">
          {t("contact.get_in_touch")}
        </Box>
        <Box 
          w={{base: '100%', md: '20%'}}
          h={{base: 4, md: 0}}/>
        <Text 
          w={{base: '100%', md: "40%"}}
          textAlign="center">
          {t("contact.get_in_touch_body")}
        </Text>
        <Box 
          w={{base: '100%', md: '20%'}}
          h={{base: 4, md: 0}}/>
        <Button 
          as="a"
          href="mailto:isaiahcollins_02@live.com"
          target="_blank"
          w={{base: "100%", md: "20%"}} 
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