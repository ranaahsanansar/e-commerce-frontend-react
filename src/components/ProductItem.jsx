import React from 'react'
import styled from 'styled-components'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Search } from '@mui/icons-material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useNavigate } from 'react-router-dom';

const Info = styled.div`

    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #80808075;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5c6681d1; // Blue Grey Color
    position: relative;
    transition: all 0.5s ease;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 70%;
    z-index: 2;
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #1fb4b4;
        transform: scale(1.2);
    }
`


const ProductItem = ({item}) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/product");
    }
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon onClick={handleClick} >
                <ShoppingCartTwoToneIcon />
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <FavoriteBorderTwoToneIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem