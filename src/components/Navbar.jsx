import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { mobile } from '../responsive.js';


const Container = styled.div`
height: 60px;
/* background-color: red; */
${mobile({
    height: "50px"
})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({
    padding: "10px 0px"
})}
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
    ${mobile({
        width: "50px"
    })}

`

const Languge = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
    display: "none"
    })}

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
    ${mobile({
        display: "none"
    })}
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
    ${mobile({
        justifyContent: "center",
        flex: 2
    })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({
        fontSize: "12px",
        marginLeft: "10px"
    })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>


                {/* Left side Of nabBar */}
                <Left>
                    <Languge>EN</Languge>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: 'grey', fontSize: 16 }} />
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
                        <Badge badgeContent={4} color="primary" sx={{ mr: 1 }}>
                            <ShoppingCartTwoToneIcon />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar