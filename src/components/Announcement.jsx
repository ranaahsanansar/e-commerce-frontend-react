
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

const Annoc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Announcement() {
  return (
    <>
        <Container>
            <Annoc>
               Announcement: Rana Ahsan Ansar
            </Annoc>
        </Container>
    </>

  )
}

export default Announcement