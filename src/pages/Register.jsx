import styled from "styled-components"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
        linear-gradient( rgba(255 , 255, 255, 0.5) , rgba(255 , 255, 255, 0.5)),
     url("https://theloadstar.com/wp-content/uploads/e-commerce-illustration-113794174--golden-sikorka-dreamstime.com_-scaled-680x0-c-default.jpg") center;
    background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #117b9b89;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SingUp</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Passowrd" />

                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam, molestiae numquam quam nobis consectetur.</Agreement>
                <Button>Sing Up</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register