import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from './../components/Announcement';
import Products from './../components/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { mobile } from './../responsive';

const Container = styled.div`
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({
        width: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })}
`
const Title = styled.h1`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px ;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        marginRight: "0px"
    })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({
        margin: "10px 0px"
    })}
`
const Options = styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select >
                    <Options disabled selected >Color</Options>
                    <Options>White</Options>
                    <Options>Black</Options>
                    <Options>Red</Options>
                </Select>
                <Select >
                    <Options disabled selected >Size</Options>
                    <Options>Small</Options>
                    <Options>Medium</Options>
                    <Options>Large</Options>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Items:</FilterText>
                <Select >
                    <Options selected >Newest</Options>
                    <Options>Price Asc</Options>
                    <Options>Price Des</Options>
                </Select>
            </Filter>
        </FilterContainer>

        <Products>

        </Products>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList