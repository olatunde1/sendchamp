import React from 'react'
import { Box, Text,Select,Container } from '@chakra-ui/react'
import './Hero.css'

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
        <Box display={{base: 'block' ,md:'flex'}} placeContent='center' textAlign='center' justifyContent={'center'} margin='0 10%' >

            <Select
           
             width='282px'
             height='64px'
             placeholder='Nigeria'
             bgColor='#ffffff'
             borderRadius='18px'
             marginRight={'16px'}
             fontSize='20px'
             inputMode='text'
             >
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
            </Select>
            <Select
            width='282px'
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