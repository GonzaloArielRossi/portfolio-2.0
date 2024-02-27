import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import AboutMeHeader from '@/components/about-me/AboutMeHeader';
import useCountDivLines from '@/hooks/useCountDivLines';

export default function AboutMe() {
  const numberOfLines = useCountDivLines('code-container');
  return (
    <Box
      as={'section'}
      bgColor={'code.100'}
      fontFamily={'var(--font-hack-regular)'}
      fontSize={'md'}
      p={2}
      rounded={'md'}
      shadow={'lg'}
      w={'full'}
    >
      <Flex direction={'column'} gap={8}>
        <AboutMeHeader />
        <HStack alignItems={'flex-start'} gap={4}>
          <VStack gap={'5px'} textAlign={'right'}>
            {Array.from({ length: numberOfLines }).map((_, i) => (
              <Text
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                color={'white'}
                gap={0}
                h={'19px'}
                opacity={'50%'}
                w={'30px'}
              >
                {i + 1}
              </Text>
            ))}
          </VStack>
          <Box id="code-container">
            <Box>
              <Text>
                <Text as={'span'} color={'code.500'}>
                  console.
                </Text>
                <Text as={'span'} color={'code.600'}>
                  log
                </Text>
                <Text as={'span'} color={'white'}>
                  {'('}
                </Text>
                <Text as={'span'} color={'code.800'}>
                  {'"Welcome👋"'}
                </Text>
                <Text as={'span'} color={'white'}>
                  {');'}
                </Text>
              </Text>
            </Box>
            <Text color={'code.100'} userSelect={'none'}>{`_`}</Text>
            <Box>
              <Text as={'span'} color={'code.700'}>
                const
              </Text>
              <Text as={'span'} color={'white'}>
                {' '}
              </Text>
              <Text as={'span'} color={'code.500'}>
                aboutMe
              </Text>
              <Text as={'span'} color={'code.700'}>
                {' = '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'{'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                name
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Gonzalo Ariel Rossi"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {','}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                location
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Buenos Aires, Argentina"'}
              </Text>
            </Box>
            <Box>
              <Text as={'span'} color={'white'}>
                {'};'}
              </Text>
            </Box>
            <Text color={'code.100'} userSelect={'none'}>{`_`}</Text>
            <Box>
              <Text as={'span'} color={'code.700'}>
                const
              </Text>
              <Text as={'span'} color={'white'}>
                {' '}
              </Text>
              <Text as={'span'} color={'code.500'}>
                frontendSkills
              </Text>
              <Text as={'span'} color={'code.700'}>
                {' = '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'{'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                languages
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"JavaScript"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"TypeScript"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"HTML"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"CSS"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                frameworks
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Next.js"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Tailwind"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Chakra UI"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                libraries
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"TanStack Query (React Query)"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Zustand"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text>
                <Text as={'span'} color={'code.600'}>
                  designTools
                </Text>
                <Text as={'span'} color={'white'}>
                  {': '}
                </Text>
                <Text as={'span'} color={'white'}>
                  {'['}
                </Text>
                <Text as={'span'} color={'code.800'}>
                  {'"Adobe Photoshop"'}
                </Text>
                <Text as={'span'} color={'white'}>
                  {', '}
                </Text>
                <Text as={'span'} color={'code.800'}>
                  {'"Adobe Illustrator"'}
                </Text>
                <Text as={'span'} color={'white'}>
                  {']'}
                </Text>
              </Text>
            </Box>
            <Box>
              <Text as={'span'} color={'white'}>
                {'};'}
              </Text>
            </Box>
            <Text color={'code.100'} userSelect={'none'}>{`_`}</Text>
            <Box>
              <Text as={'span'} color={'code.700'}>
                const
              </Text>
              <Text as={'span'} color={'white'}>
                {' '}
              </Text>
              <Text as={'span'} color={'code.500'}>
                backendSkills
              </Text>
              <Text as={'span'} color={'code.700'}>
                {' = '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'{'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                languages
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"JavaScript"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Python"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"SQL"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                frameworks
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Node.js"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Express"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                databases
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"MongoDB"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Firebase"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"SQL Server"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"PostgreSQL"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"MySQL"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"MariaDB"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                ORMs
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Mongoose"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Sequelize"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {'],'}
              </Text>
            </Box>
            <Box ml={8}>
              <Text as={'span'} color={'code.600'}>
                devOps
              </Text>
              <Text as={'span'} color={'white'}>
                {': '}
              </Text>
              <Text as={'span'} color={'white'}>
                {'['}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Github"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Docker"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Linux"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {', '}
              </Text>
              <Text as={'span'} color={'code.800'}>
                {'"Bash"'}
              </Text>
              <Text as={'span'} color={'white'}>
                {']'}
              </Text>
            </Box>
            <Box>
              <Text as={'span'} color={'white'}>
                {'};'}
              </Text>
            </Box>
            <Text color={'code.100'} userSelect={'none'}>{`_`}</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
