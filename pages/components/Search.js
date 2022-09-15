import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: center;
`;
const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    width: 35vh;
    height: 3vh;
    border-radius: 15px;
    border: 1px solid gainsboro;
`;


const Search = () => {
  return (
    <Container>
        <Input 
            placeholder="Search"
            className="search-icon"
        />
    </Container>
  )
}

export default Search