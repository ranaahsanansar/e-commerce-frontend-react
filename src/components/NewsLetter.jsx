import React from 'react'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import styled from 'styled-components';


const Container = styled.div`
    height: 60vh;
    background-color: #57a39dd1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
 margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    width: 70%;
`
const InputContainer = styled.div`
 width: 50%;
 height: 40px;
 background-color: white;
 display: flex;
 justify-content: space-between;
 border: 1px solid grey;
`
const Input = styled.input`
    border: none;
    flex : 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #064f8a;
    color: wheat;
    cursor: pointer;
`

function NewsLetter() {
  return (
    <Container>
        <Title>
            News Letter
        </Title>
        <Description>
            Rana Ahsan Ansar Testing ------
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore id odio, officia numquam eveniet similique fugit assumenda pariatur, rem iusto voluptate autem, sequi consequuntur. Ducimus quidem laboriosam autem aspernatur possimus.
        </Description>
        <InputContainer>
            <Input placeholder='Enter Your Email' />
            <Button>
                <SendRoundedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter