import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { mobile } from './../responsive';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        flexDirection: "column",
        padding: "10px"
    })}
`
const ImgContainer = styled.div`
    flex: 1;
    ${mobile({
        border: "1px solid grey"
    })}
    
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({
        height: "40vh"
    })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({
        padding: "10px"
    })}

`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({
        width: "100%"
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-style: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    ${mobile({
        width: "100%"
    })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: teal;
    }
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`


const Product = () => {

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/cart");

    }

  return (
    <Container>
        
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src='https://cdn.shopify.com/s/files/1/0547/5424/6843/products/China-Black-Kids-School-Bag-1-To3Class.jpg?v=1620065938' />
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Ahsan
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet atque inventore corrupti distinctio in accusantium repudiandae, et quae minus eaque libero obcaecati rerum sed vero amet adipisci qui officiis.
                </Desc>
                <Price>
                    Rs. 50
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="Gray" />
                        <FilterColor color="Blue" />
                    </Filter>

                    <Filter>
                        <FilterTitle>Size: </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Small</FilterSizeOption>
                            <FilterSizeOption>Medium</FilterSizeOption>
                            <FilterSizeOption>Large</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <RemoveCircleOutlineIcon />
                        <Amount>1</Amount>
                        <AddCircleOutlineIcon />
                    </AmountContainer>
                    <Button onClick={handleClick}>Add To Card</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product