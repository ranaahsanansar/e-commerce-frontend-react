import styled from "styled-components"
import { mobile } from './../responsive';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    ${mobile({
        height: "30vh"
    })}
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5c2f2f71;
`
const Button = styled.button`

    border: none;
    padding: 10px;
    color: grey;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`

function CategoryItem({item}) {

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/productlist");
    }

    console.log({item});
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button onClick={handleClick}>BUY Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem