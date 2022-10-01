import styled from "styled-components";
import FlashCards from "../Flash Card/FlashCards"
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";

export default function FlashCardPage(){
  const [respondedCounter, setRespondedCounter] = useState(0);
  const [fcQuantity, setFcQuantity] = useState(0);

  return (
      <StyledApp>
        < Header />
        < FlashCards 
          respondedCounter={respondedCounter}
          setFcQuantity={setFcQuantity} 
          setRespondedCounter={setRespondedCounter}
        /> 
        < Footer RespondedCounter={respondedCounter} fcQuantity={fcQuantity}/>
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
