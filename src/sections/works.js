import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { SiAndroid, SiReact, SiFlutter, SiDart, SiJavascript, SiKotlin } from "react-icons/si";
import fokusPreview from '../assets/fokus.png';
import coindPreview from '../assets/coind.png';
import openauthPreview from '../assets/openauth.png';
import movieousPreview from '../assets/movieous.png';

const WorksSection = () => {
  const { t } = useTranslation();
  const works = [
    {
      git: 'https://github.com/icabetong/fokus-android',
      preview: fokusPreview,
      name: 'Fokus',
      frameworks: [
        SiAndroid,
        SiKotlin
      ]
    },
    {
      git: 'https://github.com/icabetong/coind',
      preview: coindPreview,
      name: 'Coind',
      frameworks: [
        SiFlutter,
        SiDart,
      ]
    },
    {
      git: 'https://github.com/icabetong/openauth',
      preview: openauthPreview,
      name: 'OpenAuth',
      frameworks: [
        SiFlutter,
        SiDart,
      ]
    },
    {
      git: 'https://github.com/icabetong/movieous',
      preview: movieousPreview,
      name: 'Movieous',
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
              width={256}
              height={512}
              direction="column"
              align="center"
              justify="center"
              as="a"
              href={work.git}
              target="_blank"
              boxShadow="lg"
              borderRadius="md"
              bg={`linear-gradient(0deg, rgba(0 0 0 / 65%), rgba(44 82 130 / 50%)), url(${work.preview})`}
              bgPosition="center"
              bgSize="cover"
              _hover={{
                
              }}>
              <Box 
                my={4}
                color="white" 
                fontSize="2xl"
                fontWeight="medium">
                {work.name}
              </Box>
              <Stack direction="row" spacing={4}>
               { work.frameworks.map((framework) => {
                 return React.createElement(framework, { size: 24 });
               })} 
              </Stack>
            </Flex>
          );
        })
        }
      </SimpleGrid>
    </Flex>
  );
}

export default WorksSection;