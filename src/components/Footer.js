import { Container, Heading, HStack, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Container as="footer" color="white">
        <Text>
          Datos por cortesía de la{' '}
          <Link color="yellow" href="https://dolartoday.com/api/">
            API
          </Link>{' '}
          de{' '}
          <Link href="https://dolartoday.com/" color="yellow">
            DolarToday
          </Link>
        </Text>
        <Heading as="h4" mb="6">
          Creado por Jackson Paredes Ferranti
        </Heading>

        <HStack
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Link
            color="white"
            title="Visitar perfil de github"
            href="https://www.github.com/bkfan1"
          >
            <i className="bi bi-github" />
          </Link>
          <Link
            color="white"
            title="Enviar e-mail"
            href="mailto:jacksonpf177@gmail.com"
          >
            <i className="bi bi-envelope-fill" />
          </Link>
        </HStack>
      </Container>
    </>
  );
}
