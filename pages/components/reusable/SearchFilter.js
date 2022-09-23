import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position : relative;
    top: 14px;
    display: inline-block;
    margin : 0px 5px;
`;

const SearchFilter = ({name}) => {
 
    return (
        <Container>
            <input className='search-filter' placeholder={name}/>
            <div className='search-filter-icon-circle'>
                <div className='search-filter-icon'></div>
            </div>
        </Container>
    )
}

export default SearchFilter