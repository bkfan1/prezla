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
        paddingY="20px"
        textAlign="center"
        color="white"
        bg="#5B0000"
        marginBottom="10px"
      >
        <Heading as="h1" my="0">
          🇻🇪 Prezla
        </Heading>
        <Heading as="h3" mt="6" mb="0">
          Precios de divisas en bolívares cada 10 minutos
        </Heading>
      </Container>
    </>
  );
}
