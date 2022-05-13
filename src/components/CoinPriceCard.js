import { Box, Heading, Text } from '@chakra-ui/react';

export default function CoinPriceCard({ price, coin, label }) {
  return (
    <>
      <Box
        className="coinPriceCard"
        display="flex"
        flexDirection="column"
        padding="10"
        bg="white"
        border="2px solid #dbdbdb"
        borderRadius="5px"
        minWidth="180px"
        maxWidth="180px"
        margin="0"
      >
        <Heading as="h1" marginTop="4" marginBottom="1">
          {`${price} ${coin}`}
        </Heading>

        <Text marginTop="8">{label}</Text>
      </Box>
    </>
  );
}
