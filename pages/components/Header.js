import React from 'react'
import styled from 'styled-components'
import Search from './Search';

const Container = styled.div`
  padding: 20px;
  background-color: #0b968f4d;
  height: 30vh;
`;
const RowEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  position: absolute;
  cursor: pointer;
  border-radius: 10px;
  background-color: #220061;
  color: white;
  font-size: 14px;
  padding: 12px 14px;
  font-weight: 600;

  &:hover{
    background: transparent;
    color: #220061;
    border: 3px solid #220061;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px;
`;

const Tagline = styled.h2`
  display: flex;
  justify-content: center;
  line-height:40px;
`;


const Header = () => {
  return (
    <Container>
        <RowEnd>
          <Button>Post Your Service </Button>       
        </RowEnd>
        <Section>
          <Tagline>
            Sell Your Services <br/>
            Find Your Solution
          </Tagline>
          <Search/>
        </Section>
    </Container>
  )
}

export default Header