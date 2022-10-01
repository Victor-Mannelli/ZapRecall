import { useState } from "react"
import styled from "styled-components"
import logo from "../Images/logo.png"

export default function HomeScreen({setZapState}){
  const [inputValue, setInputValue] = useState("")
  return (
    <StyledHomeScreen>
        <img src={logo} alt=""/>
        <h1>ZapRecall</h1>
        <StyledInput
          type="number"
          placeholder="Digite sua meta de zaps..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></StyledInput>
        <StyledStartButton
          data-identifier="start-btn"
          onClick={() => setZapState(true)}
        >Iniciar Recall!</StyledStartButton>
    </StyledHomeScreen>
  )
}
  
const StyledHomeScreen = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
  background-color: #FB6B6B;

  font-family: 'Righteous';

  img {
    width: 36vw;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;

    margin-bottom: 35px;
  }
` 
const StyledStartButton = styled.button `
  width: 73vw;
  height: 54px;

  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  font-family: 'Recursive';
  color: #D70900;
  font-size: 18px;
  line-height: 22px;
`
const StyledInput = styled.input `
  width: 70vw;
  min-height: 43px;
  margin-bottom: 18px;
  padding: 0 15px;

  border: none;
  outline: none;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  font-family: 'Roboto';
  color: #FB6B6B;
  font-size: 14px;
  line-height: 16px;
`