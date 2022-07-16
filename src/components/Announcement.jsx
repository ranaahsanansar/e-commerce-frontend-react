
import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: #530daf;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    font-weight: 500;
    font-size: 14px;
`

function Announcement() {
  return (
    <>
        <Container>
            Ahsan Ansar
        </Container>
    </>

  )
}

export default Announcement