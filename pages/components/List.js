import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

const Container = styled.div`
    padding: 10px;
    margin: 12px;
`;

const Card = styled.div`
    display: flex;
    box-shadow:  0 0 0 1px #dddddd, 0 2px 4px 0 #00000012, 0 1px 1.5px 0 #0000000d;
    border-radius : 5px;
    outline: none;
    padding: 11px
`;

const ListContent = styled.div`
   flex : 3;
   padding: 10px;

`; 

const RightContent = styled.div` 
  margin: auto;
  display: flex;
  flex : 1;
  padding: 10px;
  justify-content: center;
`;

const Button = styled.button`
  margin:5px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
`;


const List = () => {
  return (
    <Container>
        <Card>
          <div style={{margin:'auto'}}>
            <Image 
              height={50} 
              width={50} 
              alt='loops' 
              src="/images/company.jpg"
            />
          </div>
          <ListContent> 
            <div>Sutandi Azhari M</div>
            <div>Tukang Service Ac</div>
        
            <div style={{display:'flex'}}>
              <div style={{marginRight: 10}} >Lokasi</div>
              <div style={{marginRight: 10}} >Jarak</div>
              <div style={{marginRight: 10}}>Rating</div>
              <div >Harga</div>
            </div>
          </ListContent>
          <RightContent>
            <div style={{padding: 10}} >12 d</div>
            <Button>Booking</Button>
          </RightContent>
        </Card>
    </Container>
  )
}

export default List