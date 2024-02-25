import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { LINK_TYPES } from '@/config/constants';

export default function LinkButton({ linkInfo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position={'relative'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={linkInfo.link}
        rel="noreferrer"
        target={linkInfo.type === LINK_TYPES.EXTERNAL ? '_blank' : ''}
      >
        <HStack>
          <Text
            fontFamily={'var(--font-neue-montreal-regular)'}
            fontSize={'xl'}
            textAlign={'center'}
          >
            {linkInfo.label}
          </Text>
          <Icon as={linkInfo.icon} boxSize={'20px'} />
        </HStack>
      </a>
      <Box
        bg={'brandGreen.500'}
        h={'4px'}
        position={'absolute'}
        transition={'width 0.3s ease-in-out'}
        w={isHovered ? 'full' : '0'}
      />
    </Box>
  );
}
