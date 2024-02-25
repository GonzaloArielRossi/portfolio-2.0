import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export default function AboutMeHeader() {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      position={'relative'}
    >
      <HStack>
        <Box bgColor={'code.200'} h={'15px'} rounded={'full'} w={'15px'}></Box>
        <Box bgColor={'code.300'} h={'15px'} rounded={'full'} w={'15px'}></Box>
        <Box bgColor={'code.400'} h={'15px'} rounded={'full'} w={'15px'}></Box>
      </HStack>
      <Box mx={'auto'}>
        <Text
          color={'white'}
          left={'50%'}
          position={'absolute'}
          top={0}
          transform={'translateX(-50%)'}
        >
          AboutMe.js
        </Text>
      </Box>
    </Flex>
  );
}
