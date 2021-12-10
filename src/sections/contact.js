import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <Flex
      as="section"
      id="contact"
      minHeight="80vh">
      <Heading mt={8}>{t("navigation.contact")}</Heading>
    </Flex>
  );
}

export default ContactSection;