import React from 'react'
import { Box,Container,CardHeader,Card, CardBody, CardFooter,SimpleGrid,Text,Image, Center,Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button

} from '@chakra-ui/react'
import one from './Images/pic.png'

export default function CardPage () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return (
    <Container>
      <Center>
      <SimpleGrid marginTop={'60px'} className='cardPage' templateColumns='repeat(3, 1fr)' gap={6} display={{md:'grid'}}
       >
      <Card className='Card' width={{md:'398px', base:'380px'}}margin={{md:'full', base:'0 auto'}} marginBottom={{base:'2rem'}} >
        <CardHeader>
          <Image padding={'0'} width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody  paddingLeft={'40px'} paddingRight={'24px'}>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>SMS</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send SMS</Text>
              <Text  fontSize={'16px'} marginTop='11px'><span>NGN 2.4255</span>/sms</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'} paddingTop='24px'>To Receive SMS</Text>
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
        <CardFooter className='CardFooter' justify={'center'} onClick={onOpen} >
          <Button  fontSize={'20px'}
          textDecorationLine='underline'
          color={'#0555A8'}
          fontFamily='HafferXH,sans-serif'
          backgroundColor={'transparent'}
          _hover={{
            bg: 'transparent',
          }}>More details</Button>
        </CardFooter>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={'16px'}>
          <ModalHeader display={'flex'} textAlign='center' justifyItems={'center'}>
            <Image padding={'0'} width={'54px'} height={'44px'} src={one}/>
            <Text>SMS</Text>
          </ModalHeader>
          <ModalCloseButton />
          <Divider color={' #05334f'} />
          <ModalBody display={'flex'} justifyContent='space-between' paddingTop={'34px'}>
            <Text>To Send SMS</Text>
            <Text>To Receive SMS</Text>

          </ModalBody>
          <ModalFooter display={'flex'} justifyContent='space-between' backgroundColor={'#EFF4FE'} margin='20px'>
            <Box>
              <Text fontSize={'16px'} paddingTop='8px'>To Send SMS</Text>
              <Text  fontSize={'16px'} marginTop='11px'><span>NGN 2.4255</span>/sms</Text>
            </Box>
            <Text bgColor={'#EDF5FE'} color='#EFF4FE' textAlign={'center'}
              marginTop='8px'
              paddingBottom={'4px'}
              paddingTop={'4px'}
              paddingLeft={'12px'}
              paddingRight={'12px'}
              borderRadius={'12px'}
              fontSize='12px'
              fontFamily={'"DM Sans"'}
              backgroundColor='#97d1f3'
              >Coming Soon</Text>
          </ModalFooter>
        </ModalContent>
        </Modal>
      </Card>
      <Card  className='Card' width={{md:'398px', base:'380px'}}margin={{md:'full', base:'0 auto'}} marginBottom={{base:'2rem'}}>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody  paddingLeft={'40px'} paddingRight={'24px'}>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Voice</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To make Calls</Text>
              <Text  fontSize={'16px'} marginTop='11px'> <span>NGN 66.0000</span> /sec</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'} paddingTop='24px'>To Receive Calls</Text>
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
      <Card  className='Card' width={{md:'398px', base:'380px'}}margin={{md:'full', base:'0 auto'}} marginBottom={{base:'2rem'}}>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody  paddingLeft={'40px'} paddingRight={'24px'}>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Email</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>Price Per Mail</Text>
              <Text  fontSize={'16px'} marginTop='11px'> <span>NGN 0.5500</span> /email</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Card  className='Card' width={{md:'398px', base:'380px'}}margin={{md:'full', base:'0 auto'}} marginBottom={{base:'2rem'}}>
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody  paddingLeft={'40px'} paddingRight={'24px'}>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Whatsapp</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send Message</Text>
              <Text  fontSize={'16px'} marginTop='11px'> <span>NGN 2.7500</span> /msg</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'} paddingTop='24px'>To Receive Message</Text>
              <Text  textAlign={'center'}
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
        <CardFooter className='CardFooter' justify={'center'} onClick={onOpen} >
          <Button  fontSize={'20px'}
          textDecorationLine='underline'
          color={'#0555A8'}
          fontFamily='HafferXH,sans-serif'
          backgroundColor={'transparent'}
          _hover={{
            bg: 'transparent',
          }}>More details</Button>
        </CardFooter>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={'16px'}>
          <ModalHeader display={'flex'} textAlign='center' justifyItems={'center'}>
            <Image padding={'0'} width={'54px'} height={'44px'} src={one}/>
            <Text>SMS</Text>
          </ModalHeader>
          <ModalCloseButton />
          <Divider color={' #05334f'} />
          <ModalBody display={'flex'} justifyContent='space-between' paddingTop={'34px'}>
            <Text>To Send Message</Text>
            <Text>To Receive Message</Text>

          </ModalBody>
          <ModalFooter display={'flex'} justifyContent='space-between' backgroundColor={'#EFF4FE'} margin='20px'>
            <Box>
              <Text fontSize={'16px'} paddingTop='8px'>Start at</Text>
              <Text  fontSize={'16px'} marginTop='11px'><span>NGN 3.5000/msg</span>/sms</Text>
            </Box>
            <Text bgColor={'#EDF5FE'}  textAlign={'center'}
              marginTop='8px'
              paddingBottom={'4px'}
              paddingTop={'4px'}
              paddingLeft={'12px'}
              paddingRight={'0px'}
              borderRadius={'12px'}
              fontSize='16px'
              fontFamily={'"DM Sans"'}
              fontWeight='bold'
              >NGN 0.0000/msg</Text>
          </ModalFooter>
        </ModalContent>
        </Modal>
      </Card>
      <Card  className='Card' width={{md:'398px', base:'380px'}}margin={{md:'full', base:'0 auto'}} >
        <CardHeader>
          <Image width={'64px'} height={'64px'} src={one}/>
        </CardHeader>
        <CardBody  paddingLeft={'40px'} paddingRight={'24px'}>
          <Text fontSize={'20px'} fontWeight={'600'} marginTop='1px'>Verification</Text>
          <Box display={'flex'} justifyContent='space-between'>
            <Box>
              <Text fontSize={'16px'} marginTop='24px'>To Send OTP</Text>
              <Text  fontSize={'16px'} marginTop='11px'> <span>NGN 0.0000</span>/OTP</Text>
            </Box>
            <Box>
              <Text  fontSize={'16px'} paddingTop='24px'>To Confirm OTP</Text>
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
    </Container>
      
  )
}


