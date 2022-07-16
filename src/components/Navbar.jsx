import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Container = styled.div`
height: 60px;
/* background-color: red; */
`

const Wrapper = styled.div`
padding: 10px;
display: flex;
justify-content: space-between;
`

const SearchContainer = styled.div`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 20px;
`

const Input = styled.input`
    border: none;
    margin-right: 2px;
`

const Languge = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`


// -------------------------------------------------------

const Logo = styled.h1`
    font-weight: bold;
    font-style: italic;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
// -------------------------------------------------------

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>


                {/* Left side Of nabBar */}
                <Left>
                    <Languge>EN</Languge>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: 'grey' , fontSize: 16}} />
                    </SearchContainer>
                </Left>


                {/* Center Column of NavBar  */}
                <Center>
                    <Logo>ASN Shop</Logo>
                </Center>

                {/* Right Column of NavBar  */}
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary" sx={{mr: 1}}>
                            <ShoppingCartTwoToneIcon />
                        </Badge>
                    </MenuItem>
                </Right>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar