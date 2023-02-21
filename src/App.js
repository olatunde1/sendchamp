import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import Hero from './components/Hero';
import CardPage from './components/CardPage';
import './GlobalStyle.css'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <CardPage />
    </ChakraProvider>
  );
}

export default App;
