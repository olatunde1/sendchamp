import React from 'react';
import { ChakraProvider,theme } from '@chakra-ui/react';
import Hero from './components/Hero';
import CardPage from './components/CardPage';
import ApplyPage from './components/Apply';
import Build from './components/Build'
import Footer from './components/Footer'
import './GlobalStyle.css'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <CardPage />
      <ApplyPage />
      <Build />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
