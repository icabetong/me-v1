import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import {
  SiAndroid,
  SiKotlin,
  SiJava,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiExpress,
} from "react-icons/si";

const AboutSection = () => {
  const { t } = useTranslation();
  const skills = [
    { icon: SiAndroid, name: 'skill.android' },
    { icon: SiKotlin, name: 'skill.kotlin' },
    { icon: SiJava, name: 'skill.java' },
    { icon: SiFlutter, name: 'skill.flutter' },
    { icon: SiJavascript, name: 'skill.javascript' },
    { icon: SiTypescript, name: 'skill.typescript' },
    { icon: SiMysql, name: 'skill.sql' },
    { icon: SiMongodb, name: 'skill.mongodb' },
    { icon: SiNodedotjs, name: 'skill.nodejs' },
    { icon: SiReact, name: 'skill.reactjs' },
    { icon: SiExpress, name: 'skill.expressjs' }
  ];

  return (
    <Flex
      as="section"
      id="about"
      w='100%'
      minHeight="80vh"
      direction="column"
      align="center">
      <Heading mt={8}>{t("navigation.about")}</Heading>
      <Flex
        w='100%'
        mt={4}
        align="start"
        justify={{base: "center", md: "space-around", xl: "space-between"}}
        direction={{base: "column-reverse", md: "row"}}
        wrap="nowrap">
        <Stack
          my={4}
          width={{base: '100%', md: '50%'}}
          spacing={4}>
          <Box
            fontSize={22}
            fontWeight="semibold"
            textAlign='center'>
            {t("about.skills")}
          </Box>
          <SimpleGrid 
            p={4}
            columns={{base: 2, lg: 3, xl: 4}}
            spacing={4}>
            { skills.map((skill) => {
                return (
                  <Box
                    key={skill.name}
                    align="center"
                    justifyContent="center"
                    borderWidth='1px'
                    borderRadius="md"
                    p={4}
                    _hover={{
                      borderColor: 'blue.300',
                      color: 'blue.300',
                      transition: 'all 500ms ease'
                    }}>
                    <Box display="inline-block">
                      {React.createElement(skill.icon, { size: 32 })}
                    </Box>
                    <Box mt={2}>{t(skill.name)}</Box>
                  </Box>
                )
              })
            }
          </SimpleGrid>
        </Stack>
        <Stack 
          my={4}
          w={{base: '100%', md: '50%'}}
          spacing={4}>
          <Box
            fontSize={22}
            fontWeight="semibold"
            textAlign='center'>
            {t("about.introduction")}
          </Box>
          <Box
            px={16}
            color="whiteAlpha.700"
            textAlign="justify">
            {t("about.info")}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default AboutSection;

