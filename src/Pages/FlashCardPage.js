import styled from "styled-components";
import FlashCards from "../Flash Card/FlashCards"
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";

export default function FlashCardPage({deck}){
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
        < Footer deck={deck} RespondedCounter={respondedCounter} ansIconList={ansIconList}/>
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
  padding: 0 0 100px 0;
`
