import styled from "styled-components";
import FlashCards from "../Flash Card/FlashCards"
import Footer from "../Footer/Footer";
import Header from "../Header";
import { useState } from "react";

export default function FlashCardPage({deck, inputValue}){
  const [respondedCounter, setRespondedCounter] = useState(0);
  const [ansIconList, setAnsIconList] = useState([]);

  return (
      <StyledApp>
        < Header />
        < FlashCards 
          deck={deck}
          respondedCounter={respondedCounter}
          setRespondedCounter={setRespondedCounter}
          setAnsIconList={setAnsIconList}
          ansIconList={ansIconList}
        /> 
        < Footer inputValue={inputValue} deck={deck} RespondedCounter={respondedCounter} ansIconList={ansIconList}/>
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
  padding: 0 0 110px 0;
`