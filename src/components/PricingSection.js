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
        marginBottom="20px"
      >
        <Heading color="white">{`${emoji} ${title}`}</Heading>

        <Grid gridTemplateColumns="repeat(1, 1fr))" gap="15px" className="priceCardsGrid">{children}</Grid>
      </Container>
    </>
  );
}
