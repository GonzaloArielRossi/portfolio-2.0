import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import { IoLogoGithub, IoRocketOutline } from 'react-icons/io5';

import ProjectsInfo from '@/components/projects/ProjectsInfo.json';

export default function Projects() {
  return (
    <>
      <Heading
        color={'brandGreen.500'}
        fontSize={'6xl'}
        id="projects"
        textAlign={'center'}
      >
        Projects
      </Heading>
      <Flex direction={'column'} gap={{ base: 8, md: 12 }} w={'100%'}>
        {ProjectsInfo.map((project) => (
          <Box
            key={project.id}
            borderColor={'gray.50'}
            borderWidth={'1px'}
            p={8}
            rounded={'md'}
            shadow={'lg'}
            w={'100%'}
          >
            <SimpleGrid
              autoFlow
              autoRows
              alignContent={'center'}
              justifyContent={'center'}
              minChildWidth={'300px'}
              spacing={12}
              templateColumns={{ base: '1fr', md: '1fr 2fr' }}
            >
              <VStack spacing={8}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
                <VStack>
                  <Heading fontSize={'lg'}>Tech Stack</Heading>
                  {project.techStack.map((tech, idx) => (
                    <Text key={tech}>{tech}</Text>
                  ))}
                </VStack>
                <HStack justifySelf={'center'} mx={'auto'} spacing={8}>
                  <Tooltip label={'Github repo'}>
                    <a href={project.repoLink} rel="noreferrer" target="_blank">
                      <Icon as={IoLogoGithub} boxSize={'40px'} />
                    </a>
                  </Tooltip>
                  <Tooltip label={'Deployment site'}>
                    <a
                      href={project.deployLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon as={IoRocketOutline} boxSize={'40px'} />
                    </a>
                  </Tooltip>
                </HStack>
              </VStack>
              <Box alignSelf={'center'} overflow={'hidden'} rounded={'md'}>
                <Image
                  alt={`${project.title} demo`}
                  height={450}
                  src={project.image}
                  width={800}
                />
              </Box>
            </SimpleGrid>
          </Box>
        ))}
      </Flex>
    </>
  );
}
