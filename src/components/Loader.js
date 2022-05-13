import { Box, Container } from '@chakra-ui/react';

export default function Loader() {
  return (
    <>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        left="0"
        right="0"
        top="0"
        bottom="0"
        width="100%"
        height="100vh"
      >
        <Box as="div" className="lds-dual-ring" />
      </Container>
    </>
  );
}
