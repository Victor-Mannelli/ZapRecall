import { useState } from "react"
import styled from "styled-components"
import logo from "../Images/logo.png"
import DeckButton from "../DeckButton"

export default function HomeScreen({setZapState, setDeck, deck, inputValue, setInputValue}){
  const [underlineAlertDeck, setUnderlineAlertDeck] = useState(false)
  const [underlineAlertInput, setUnderlineAlertInput] = useState(false)

  function validate(){
    if (deck === undefined){
      return setUnderlineAlertDeck(true)
    }
    if (inputValue > deck.length || inputValue < 1) {
      return setUnderlineAlertInput(true) 
    }
    setZapState(true)
  }

  return (
    <StyledHomeScreen>
        <img src={logo} alt=""/>
        <h1>ZapRecall</h1>

        < DeckButton setDeck={setDeck} deck={deck}/>
        {underlineAlertDeck === true && <p> Você deve selecionar um deck antes! </p>}

        <StyledInput
          type="number"
          placeholder="Digite sua meta de zaps..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></StyledInput>
        {underlineAlertInput === true && <p> Sua meta deve ser maior que 0 e menor que {deck.length}! </p>}

        <StyledStartButton
          data-identifier="start-btn"
          onClick={() => validate()}
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
  p {
    margin-top: 3px;
    font-size: 15px;
    color: #FFFFFF;
  }
` 
const StyledStartButton = styled.button `
  width: 73vw;
  height: 54px;
  margin-top: 18px;

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
  width: 73vw;
  min-height: 43px;
  margin-top: 18px;
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

  &::placeholder {
    color: #ADADAD;
  }
`