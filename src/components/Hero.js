import React from 'react'
import { Box, Text,Select } from '@chakra-ui/react'
import './Hero.css'

const Hero = () => {
  return (
    <Box className='hero'  textAlign="center" fontSize="48px" >
        <Text  fontSize='48px' fontWeight='500'>Pricing for every business</Text>
        <Text fontSize='18px' >No hidden fees or charges - simple & flexible pricing that fits with your <br /> business at any stage.</Text>
        <Box display={'flex'} textAlign='center' justifyContent={'center'}>

            <Select
             display='flex'
             width='282px'
             height='64px'
             placeholder='Nigeria'
             bgColor='#ffffff'
             borderRadius='18px'>
                <option>Nigeria</option>
            </Select>
            <Select
            display='flex'
            width='282px'
            height='64px'
            placeholder='Nigeria'
            bgColor='#ffffff'
            borderRadius='18px'
            placeholder='Currency'>
                    <option>Nigeria</option>
            </Select>


        </Box>
    </Box>
  )
}

export default Hero