import React from 'react'
import styled from 'styled-components'
import Search from '../Search';
import { Heading , Stack, Button } from '@chakra-ui/react';


const Container = styled.div`
  padding: 20px;
  background-color: #0b968f4d;
  height: 30vh;
`;
const RowEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const Header = () => {
  return (
    <Container>
        <RowEnd>
          <Button 
            borderRadius='13'
            p='3'
            colorScheme="red" 
            variant='solid' 
            _hover={{bgColor:"gray.50", color:'black'}} 
            >
              Post Your Service
          </Button>       
        </RowEnd>
        <Stack textAlign='center' padding='5' spacing='1' >
          <Heading as='h3' className='text-heading'> Sell Your Services </Heading>
          <Heading as='h3' className='text-heading'>Find Your Solution</Heading>      
        </Stack>
        <Search/>
    </Container>
  )
}

export default Header