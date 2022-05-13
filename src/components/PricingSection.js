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

        <HStack className="priceCardsGrid">{children}</HStack>
      </Container>
    </>
  );
}
