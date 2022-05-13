import { Container, Heading, HStack, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Container
        as="header"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        textAlign="center"
        color="white"
      >
        <Heading as="h1" mb="8">
          🇻🇪 Prezla
        </Heading>
        <Heading as="h3" my="0">
          Precios de divisas en bolívares cada 10 minutos
        </Heading>
      </Container>
    </>
  );
}
