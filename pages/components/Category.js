import React from 'react'
import styled from 'styled-components'
import SearchFilter from './reusable/SearchFilter';

const Container = styled.div`
    padding: 10px;
    margin: 10px;
`;


const Category = () => {
  return (
    <Container>
      <SearchFilter name={'Category'} />
      <SearchFilter name={'Location'} />
      <SearchFilter name={'Price'} />
      <SearchFilter name={'Rating'} />
    </Container>
  )
}

export default Category