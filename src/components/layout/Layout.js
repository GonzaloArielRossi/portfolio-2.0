import { Container, Flex } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Container maxW={'1200px'} mx={'auto'} py={18}>
      <Flex align={'center'} direction={'column'} gap={12} justify={'center'}>
        {children}
      </Flex>
    </Container>
  );
}
