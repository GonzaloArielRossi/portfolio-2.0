import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <footer>
      <Box
        bg={colorMode === 'light' ? 'gray.800' : 'gray.700'}
        fontSize={'lg'}
        mt={16}
        mx={'auto'}
        p={8}
        roundedTop={'md'}
        w={'100%'}
      >
        <VStack maxW={'1200px'} mx={'auto'} spacing={8}>
          <Stack
            alignContent={'center'}
            color={'white'}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'center'}
            spacing={12}
            textAlign={'center'}
          >
            <Text>🌎 Buenos Aires, Argentina</Text>
            <Text>✉️ gonzaloarielrossi@gmail.com</Text>
            <Text>📱 +54 9 11-3033-4862</Text>
          </Stack>
          <HStack
            alignContent={'center'}
            color={'white'}
            justifyContent={'center'}
            spacing={4}
          >
            <Tooltip label={'Github Profile'}>
              <a
                href="https://github.com/GonzaloArielRossi"
                rel="noreferrer"
                target="_blank"
              >
                <Icon as={IoLogoGithub} boxSize={'40px'}></Icon>
              </a>
            </Tooltip>
            <Tooltip label={'LinkedIn Profile'}>
              <a
                href="https://www.linkedin.com/in/gonzaloarossi/"
                rel="noreferrer"
                target="_blank"
              >
                <Icon as={IoLogoLinkedin} boxSize={'40px'}></Icon>
              </a>
            </Tooltip>
          </HStack>
        </VStack>
      </Box>
    </footer>
  );
}
