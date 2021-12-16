import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { SiAndroid, SiReact, SiFlutter, SiDart, SiJavascript, SiKotlin } from "react-icons/si";
import fokusPreview from '../assets/fokus.webp';
import coindPreview from '../assets/coind.webp';
import openauthPreview from '../assets/openauth.webp';
import movieousPreview from '../assets/movieous.webp';

const WorksSection = () => {
  const { t } = useTranslation();
  const works = [
    {
      id: 'fokus',
      git: 'https://github.com/icabetong/fokus-android',
      preview: fokusPreview,
      name: 'Fokus',
      desc: '',
      frameworks: [
        SiAndroid,
        SiKotlin
      ]
    },
    {
      id: 'coind',
      git: 'https://github.com/icabetong/coind',
      preview: coindPreview,
      name: 'Coind',
      desc: '',
      frameworks: [
        SiFlutter,
        SiDart,
      ]
    },
    {
      id: 'openauth',
      git: 'https://github.com/icabetong/openauth',
      preview: openauthPreview,
      name: 'OpenAuth',
      desc: '',
      frameworks: [
        SiFlutter,
        SiDart,
      ]
    },
    {
      id: 'movieous',
      git: 'https://github.com/icabetong/movieous',
      preview: movieousPreview,
      name: 'Movieous',
      desc: '',
      frameworks: [
        SiJavascript,
        SiReact,
      ]
    },
  ]

  return (
    <Flex
      w="100%"
      as="section"
      id="works"
      align="center"
      minHeight="80vh"
      direction="column">
      <Heading textAlign="center" mt={8}>{t("navigation.works")}</Heading>
      <SimpleGrid
        mt={4}
        p={4}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}>
        {works.map((work) => {
          return (
            <Flex
              key={work.id}
              width={256}
              height={512}
              direction="column"
              align="center"
              justify="center"
              as="a"
              href={work.git}
              rel="noopener"
              role="link"
              target="_blank"
              border="1px"
              borderColor="gray.700"
              borderRadius="md"
              bg={`linear-gradient(0deg, rgba(26 32 44 / 95%), rgba(44 82 130 / 60%)), url(${work.preview})`}
              bgPosition="center"
              bgSize="cover"
              _hover={{
                borderColor: "blue.300",
                transition: "all 500ms ease"
              }}>
              <Box 
                my={4}
                color="blue.300" 
                fontSize="2xl"
                fontWeight="medium">
                {work.name}
              </Box>
              <Box
                mb={4}
                mx={4}
                textAlign="center">
                {t(`works.${work.id}`)}
              </Box>
              <Stack direction="row" spacing={4}>
               { work.frameworks.map((framework) => {
                 return React.createElement(framework, { key: framework.name, size: 24 });
               })} 
              </Stack>
            </Flex>
          );
        })
        }
      </SimpleGrid>
      <Button
        as="a"
        href="https://github.com/icabetong?tab=repositories"
        target="_blank"
        rel="noopener"
        variant="outline"
        rightIcon={<ChevronRightIcon/>}>
        {t("works.more")}
      </Button>
    </Flex>
  );
}

export default WorksSection;