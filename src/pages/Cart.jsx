
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`
const Tittle = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600px;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"} ;
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`



// -----------------------------Bottom 
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
`

const Info = styled.div`
    flex: 3;
    
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 150px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 2px solid black;
`
const ProductSize = styled.div`
    
`
// -----------------------------

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgrey;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 500;
    display: flex;
`

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductDetailContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`



const Cart = () => {
  return (
    <Container >
        <Announcement />
        <Navbar />
        <Wrapper>
            <Tittle>Your Cart</Tittle>
            <Top>
                
                <TopButton >Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (1)</TopText>
                    <TopText>Shopping Bag (0)</TopText>
                </TopTexts>
                <TopButton type="filled" >Checout Now</TopButton>
            </Top>


            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'/>
                            <Details>
                                <ProductName>
                                    <b>Product: </b>Shoes
                                </ProductName>
                                <ProductID>
                                    <b>ID: </b>3091045145
                                </ProductID>
                                <ProductColor color='red' />
                                <ProductSize>
                                    <b>Size:</b> 22
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductDetailContainer>
                                <AddCircleOutlineIcon />
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineIcon />
                            </ProductDetailContainer>
                            <ProductPrice>$ 500</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <hr />
                    <Product>
                        <ProductDetail>
                            <Image src='https://uniworthdress.com/uploads/product/webp/TP2225..webp'/>
                            <Details>
                                <ProductName>
                                    <b>Product: </b>T-Shirt
                                </ProductName>
                                <ProductID>
                                    <b>ID: </b>3091045145
                                </ProductID>
                                <ProductColor color='white' />
                                <ProductSize>
                                    <b>Size:</b> 22
                                </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductDetailContainer>
                                <AddCircleOutlineIcon />
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineIcon />
                            </ProductDetailContainer>
                            <ProductPrice>$ 500</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Extimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5</SummaryItemPrice>
                        </SummaryItem> 
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem> 
                        <Button>CheckOut Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart