import React from 'react';
import styled from "styled-components";

import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import Announcement from './Announcement';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #0c19d1;
    position: relative;
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
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const Title = styled.h1`
    
`

const Desc = styled.p`
    
`

const Button = styled.button`
    
`
const InfoContainer = styled.div`
    flex: 1;
`


function Slider() {
    return (
        <Container >
            <Arrow direction="left">
                <KeyboardArrowLeftSharpIcon />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                        <Image src='https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.2x.rsquare.w600.jpg' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                            sdfdsf
                        </Title>
                        <Desc>
                            sdfdsf
                        </Desc>
                        <Button>
                            dsfdsf
                        </Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <KeyboardArrowRightSharpIcon />
            </Arrow>
        </Container>
    )
}

export default Slider