import {
  Container,
  Heading,
  Grid,
  SimpleGrid,
  HStack,
  VStack,
} from '@chakra-ui/react';

export default function PricingSection({ children, emoji, title }) {
  return (
    <>
      <Container
        as="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        marginBottom="20px"
      >
        <Heading color="white">{`${emoji} ${title}`}</Heading>

        <Grid as="div" templateColumns='repeat(2, 1fr)' gap="15px" className="priceCardsGrid">{children}</Grid>
      </Container>
    </>
  );
}
