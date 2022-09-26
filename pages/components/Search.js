import { InputGroup, InputLeftElement, Input  } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: center;
`;

const Search = () => {
  return (
    <Container>
        <InputGroup w='300px' bg="white" borderRadius='25' >
          <InputLeftElement pointerEvents='none' h="100%" >
            <Search2Icon color='gray.300'/>
          </InputLeftElement>
          <Input type='tel' placeholder='Search' h='50' borderRadius='25'/>
        </InputGroup>
          
    </Container>
  )
}

export default Search