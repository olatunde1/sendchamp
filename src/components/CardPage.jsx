import React from 'react'
import { Box,Container,CardHeader,Card, CardBody, CardFooter,SimpleGrid,Heading,Text,Button,Image,Link, Center,Divider,extendTheme } from '@chakra-ui/react'
import one from './Images/pic.png'
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const CardPage = () => {
  return (
   <Center>
       <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)' gap={6} display={{md:'grid'}}>
      <Card className='Card'>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>SMS</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send SMS</Text>
              <Text  fontSize={'16px'} marginTop='11px'>NGN 2.4255/sms</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'}>To Receive SMS</Text>
              <Text bgColor={'#EDF5FE'} color='#2F8EFF' textAlign={'center'}
              marginTop='8px'
              padding='2px'
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              >Coming Soon</Text>
            </Box>
          </Box>
        </CardBody>
        <Divider color={' #97d1f3'} />
        <CardFooter className='CardFooter' justify={'center'} >
          <Text  fontSize={'20px'} textDecorationLine='underline' color={'#0555A8'} fontFamily='HafferXH,sans-serif'>More details</Text>
        </CardFooter>
      </Card>
      <Card className='Card'>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Voice</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To make Calls</Text>
              <Text  fontSize={'16px'} marginTop='11px'>NGN 66.0000/sec</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'}>To Receive Calls</Text>
              <Text bgColor={'#EDF5FE'} color='#2F8EFF' textAlign={'center'}
              marginTop='8px'
              padding='2px'
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              >Coming Soon</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Card className='Card'>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Email</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>Price Per Mail</Text>
              <Text  fontSize={'16px'} marginTop='11px'>NGN 0.5500/email</Text>
            </Box>
            {/* <Box>
              <Text  fontSize={'16px'}>To Receive SMS</Text>
              <Text bgColor={'#EDF5FE'} color='#2F8EFF' textAlign={'center'}
              marginTop='8px'
              padding='2px'
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              >Coming Soon</Text>
            </Box> */}
          </Box>
        </CardBody>
        <Divider color={' #97d1f3'} />
        <CardFooter className='CardFooter' justify={'center'} >
          <Text  fontSize={'20px'} textDecorationLine='underline' color={'#0555A8'} fontFamily='HafferXH,sans-serif'>More details</Text>
        </CardFooter>
      </Card>
      <Card className='Card'>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Whatsapp</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send Message</Text>
              <Text  fontSize={'16px'} marginTop='11px'>NGN 2.7500/msg</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'}>To Receive Message</Text>
              <Text bgColor={'#EDF5FE'} color='#2F8EFF' textAlign={'center'}
              marginTop='8px'
              padding='2px'
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              >NGN 0.0000/msg</Text>
            </Box>
          </Box>
        </CardBody>
        <Divider color={' #97d1f3'} />
        <CardFooter className='CardFooter' justify={'center'} >
          <Text  fontSize={'20px'} textDecorationLine='underline' color={'#0555A8'} fontFamily='HafferXH,sans-serif'>More details</Text>
        </CardFooter>
      </Card>
      <Card className='Card'>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Verification</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send OTP</Text>
              <Text  fontSize={'16px'} marginTop='11px'>NGN 0.0000/OTP</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'}>To Confirm OTP</Text>
              <Text  textAlign={'center'}
              marginTop='8px'
              padding='2px'
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              >NGN 0.5500/OTP</Text>
            </Box>
          </Box>
        </CardBody>
        
      </Card>
  </SimpleGrid>
   </Center>
  )
}

export default CardPage