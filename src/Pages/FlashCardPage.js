import styled from "styled-components";
import FlashCards from "../Flash Card/FlashCards"
import Footer from "../Footer";
import Header from "../Header";

export default function FlashCardPage(){
  return (
      <StyledApp>
        < Header />
        < FlashCards /> 
        < Footer />
      </StyledApp>
  )
}

const StyledApp = styled.div `

  display: flex;  
  flex-direction: column;
  align-items: center;
  
  background-color: #FB6B6B;

  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0 0 140px 0;
`