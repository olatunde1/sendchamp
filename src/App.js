import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import Hero from './components/Hero';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
    </ChakraProvider>
  );
}

export default App;
