import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      id="about"
      minHeight="80vh"
      direction="column"
      align="center"
      >
      <Heading>{t("navigation.about")}</Heading>
      
    </Flex>
  );
}

export default AboutSection;