import React, { useEffect, useState } from 'react';
import {
  Heading,
  Container,
  Text,
  Box,
  HStack,
  SimpleGrid,
  Grid,
} from '@chakra-ui/react';
import './index.css';
import CoinPriceCard from './components/CoinPriceCard';
import Loader from './components/Loader';
import PricingSection from './components/PricingSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [pricesData, setPricesData] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch('https://s3.amazonaws.com/dolartoday/data.json');

      const prices = await res.json();
      setPricesData(prices);
    };

    fetchPrices();
  }, []);

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      minHeight="100vh"
      bg="#820000"
    >
      {pricesData === null ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Box textAlign="center" padding="5" bg="#8E1919" borderRadius="5px">
            <Text color="white" mb="0">
              Última actualización de precios:
            </Text>
            <Text color="white" fontWeight="bold">
              {pricesData._timestamp.fecha}
            </Text>
          </Box>

          <PricingSection title="USD" emoji="💵">
            <CoinPriceCard
              price={pricesData.USD.promedio}
              coin="Bs"
              label={'Promedio'}
            />

            <CoinPriceCard
              price={pricesData.USD.dolartoday}
              coin="Bs"
              label={'Dolar Today'}
            />

            <CoinPriceCard
              price={pricesData.USD.efectivo}
              coin="Bs"
              label={'Efectivo'}
            />

            <CoinPriceCard
              price={pricesData.USD.sicad1}
              coin="Bs"
              label={'SICAD 1'}
            />
          </PricingSection>

          <PricingSection title="EUR" emoji="💶">
            <CoinPriceCard
              price={pricesData.EUR.promedio}
              coin="Bs"
              label={'Promedio'}
            />

            <CoinPriceCard
              price={pricesData.EUR.dolartoday}
              coin="Bs"
              label={'Dolar Today'}
            />

            <CoinPriceCard
              price={pricesData.EUR.efectivo}
              coin="Bs"
              label={'Efectivo'}
            />

            <CoinPriceCard
              price={pricesData.EUR.sicad1}
              coin="Bs"
              label={'SICAD 1'}
            />
          </PricingSection>

          <Footer />
        </>
      )}
    </Container>
  );
}

export default App;
