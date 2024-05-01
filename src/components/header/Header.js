import {
  Box,
  Heading,
  IconButton,
  Text,
  Tooltip,
  useColorMode
} from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as={'header'} position={'relative'} w={'full'}>
      <Box mt={{ base: 12, sm: 0 }}>
        <Heading
          color={colorMode === 'light' ? 'brandGreen.500' : 'brandWhite.100'}
          fontSize={'6xl'}
          textAlign={'center'}
        >
          Gonzalo Ariel Rossi
        </Heading>
        <Text
          fontFamily={'var(--font-neue-montreal-italic)'}
          fontSize={'2xl'}
          textAlign={'center'}
        >
          Web Developer
        </Text>
      </Box>
      <Tooltip
        label={colorMode === 'dark' ? 'Toggle light mode' : 'Toggle dark mode'}
        placement={'left'}
      >
        <IconButton
          icon={colorMode === 'dark' ? <IoSunny /> : <IoMoon />}
          position={'absolute'}
          right={0}
          top={2}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </Box>
  );
}
