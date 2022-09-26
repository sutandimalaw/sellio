import React from 'react'
import { 
  Container , 
  Box, 
  Avatar, 
  Flex, 
  Text, 
  Badge, 
  Wrap,
  Spacer, 
  Button,
  Tag,
  Center,
  Stack
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

const List = () => {
  return (
    <Container ml='8' w='80%' maxWidth='80%'>
      <Box shadow='md' borderWidth='1px'p='5' borderRadius='10' mt='5'>
        <Flex>
          <Avatar src='/images/elcapito.jpeg' />
          <Box ml='3'>
            <Stack spacing='1' ml='1'>
              <Text fontWeight='bold'>
                Super Capik
                <Badge ml='1' colorScheme='green'>
                  New
                </Badge>
              </Text>
              <Text fontSize='sm'>UI Engineer</Text>
            </Stack>
            <Flex mt='3'>
              <Wrap> 
                <Tag fontSize='sm'>Lokasi</Tag>
                <Tag fontSize='sm'>Jarak</Tag>
                <Tag fontSize='sm'>Rating</Tag>
                <Tag fontSize='sm'>Harga</Tag>
              </Wrap>
            </Flex>
          </Box>
          <Spacer/>
          <Flex m='auto' >
              <Center> 
                <TimeIcon />
                <Text mr='4'>1d</Text> 
              </Center>
             <Button>Booking</Button>
          </Flex>
        </Flex>
      </Box>
       
    </Container>
  )
}

export default List