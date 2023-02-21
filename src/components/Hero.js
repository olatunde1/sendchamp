import React from 'react'
import { Box, Text,Select,Container } from '@chakra-ui/react'
import './Hero.css'

const Hero = () => {
  return (
    <Box className='hero'  textAlign="center" fontSize="48px" paddingBottom={'6rem'} >
        <Container>
        <Text  fontSize='48px' fontWeight='600' fontFamily={'HafferXH,sans-serif'}>Pricing for every business</Text>
        <Text fontSize='18px' >No hidden fees or charges - simple & flexible pricing that fits with your <br /> business at any stage.</Text>
        <Box display={'flex'} textAlign='center' justifyContent={'center'} margin='0 auto'>

            <Select
           
             width='282px'
             height='64px'
             placeholder='Nigeria'
             bgColor='#ffffff'
             borderRadius='18px'
             marginRight={'16px'}>
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