import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Heading } from "@chakra-ui/react";

const WorksSection = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      id="works"
      minHeight="80vh">
      <Heading mt={8}>{t("navigation.works")}</Heading>
    </Flex>
  );
}

export default WorksSection;