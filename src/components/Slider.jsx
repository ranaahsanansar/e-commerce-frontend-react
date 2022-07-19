import React, { useState } from 'react';
import styled from "styled-components";
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';

import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    /* color: #088167; */
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ece7e7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.3;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    /* yaha pr Props ki Value Commponent sy aa rhi ha  */
    transform: translateX( ${props => props.slideNum * -100}vw ); /* Slide ko Agy krny ky liya */ 
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 100%;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 30%;
`
const InfoContainer = styled.div`
    flex: 1;
`


function Slider() {

    const [slideIndex , setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 );
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 );
    
        }
    }

    return (
        <Container >
            <Arrow direction="left" onClick={() =>handleClick("left")}>
                <KeyboardArrowLeftSharpIcon />
            </Arrow>
            <Wrapper slideNum={slideIndex}>
                {sliderItems.map(item => (

                <Slide bg={item.bg} key={item.id} >
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                            {item.title}
                        </Title>
                        <Desc>
                            {item.desc}
                        </Desc>
                        <Button>
                            Show
                        </Button>
                    </InfoContainer>
                </Slide>
                    ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() =>handleClick("right")}>
                <KeyboardArrowRightSharpIcon />
            </Arrow>
        </Container>
    )
}

export default Slider