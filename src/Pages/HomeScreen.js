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
  height: 100vh;
  background-color: #FB6B6B;

  font-family: 'Righteous';

  img {
    width: 160px;
    margin: 17px 0;
  }
  h1 {
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;

    margin-bottom: 30px;
  }
  p {
    font-size: 15px;
    color: #FFFFFF;
  }
  @media (max-width: 400px) {
    width: 100vw;
    min-height: 100vh;

    img {
      width: 36vw;
      margin: 5px 0;
    }
    h1 {
      margin-bottom: 15px;
    }
  }
` 
const StyledStartButton = styled.button `
  width: 270px;
  min-height: 50px;
  margin: 15px 0;

  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  font-family: 'Recursive';
  color: #D70900;
  font-size: 18px;
  line-height: 22px;

  @media (max-width: 400px) {
    width: 73vw;
  }
`
const StyledInput = styled.input `
  width: 270px;
  min-height: 43px;
  margin-top: 15px;
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

  @media (max-width: 400px) {
    width: 73vw;
  }
`