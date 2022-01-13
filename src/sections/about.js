import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Box, 
  Flex, 
  Heading, 
  Image, 
  SimpleGrid, 
  Stack, 
  useColorMode
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
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
import { me } from "../assets/assets";

const AboutSection = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  
  const skills = [
    { icon: SiAndroid, name: 'skill.android', star: 3 },
    { icon: SiKotlin, name: 'skill.kotlin', star: 4 },
    { icon: SiJava, name: 'skill.java', star: 4 },
    { icon: SiFlutter, name: 'skill.flutter', star: 3  },
    { icon: SiJavascript, name: 'skill.javascript', star: 4 },
    { icon: SiTypescript, name: 'skill.typescript', star: 4 },
    { icon: SiMysql, name: 'skill.sql', star: 3 },
    { icon: SiMongodb, name: 'skill.mongodb', star: 3 },
    { icon: SiNodedotjs, name: 'skill.nodejs', star: 2 },
    { icon: SiReact, name: 'skill.reactjs', star: 3 },
    { icon: SiExpress, name: 'skill.expressjs', star: 4 }
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
                    <Box align="center" mt={4}>
                    { Array(5).fill('').map((_, i) => (
                      <StarIcon mx="1px" key={i} color={i < skill.star ? "blue.300" : "gray.100" }/>
                    ))
                    }
                    </Box>
                  </Box>
                )
              })
            }
          </SimpleGrid>
        </Stack>
        <Stack 
          my={4}
          w={{base: '100%', md: '50%'}}
          spacing={4}
          align="center"
          justify="center">
          <Image 
            width="128px"
            height="128px"
            boxSize="128px" 
            objectFit="conver" 
            src={me}
            loading="lazy"
            borderRadius="full"
            alt={t("me_complete")}/>
          <Box
            fontSize={22}
            fontWeight="semibold"
            textAlign='center'>
            {t("about.introduction")}
          </Box>
          <Box
            px={16}
            color={colorMode === 'dark' ? "gray.400" : "gray.600"}
            textAlign="justify">
            {t("about.info")}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default AboutSection;

