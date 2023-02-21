import React, { useEffect, useState } from 'react'
import { Box, Text,Container } from '@chakra-ui/react'
import Select from 'react-select';
import './Hero.css'


const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};

const Hero = () => {
  return (
    <Box className='hero'  textAlign="center" fontSize="48px" paddingBottom={'6rem'} paddingTop='96px' >
        <Container>
        <Text  
        fontSize={{md:'48px', base:'34px'}}
        fontWeight='600'
        lineHeight={{base: '36px'}}
        fontFamily={'HafferXH,sans-serif '}
        fontStyle='normal'
        paddingBottom={'32px'}>
          Pricing for every business
        </Text>
        <Text fontSize={{md:'24px', base:'20px'}}  textAlign='center'  paddingBottom={'64px'} >No hidden fees or charges - simple & flexible pricing that fits with your business at any stage.</Text>
        <Box
            display={{ md:'flex',base: 'block'}}
            fontSize={{ md:'28px',base: '20px'}}
            placeContent='center'
            textAlign='center'
            justifyContent={'center'}
            margin='0 1%' >
          <CountrySelect />
        

            <Select
            
           
            height='64px'
            bgColor='#ffffff'
            borderRadius='18px'
            placeholder='NGN'>
                    <option>Nigeria</option>
            </Select>
           

        </Box>
        </Container>
    </Box>
  )
}

export default Hero