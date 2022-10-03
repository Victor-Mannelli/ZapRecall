import GlobalStyle from "./GlobalStyles";
import { useState } from "react";
import FlashCardPage from "./Pages/FlashCardPage";
import HomeScreen from "./Pages/HomeScreen";

export default function App() {
  const [zapState, setZapState] = useState(false)
  const [deck, setDeck] = useState();
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {zapState 
        ? <FlashCardPage deck={deck} inputValue={inputValue}/> 
        : <HomeScreen inputValue={inputValue} setInputValue={setInputValue} setDeck={setDeck} deck={deck} setZapState={setZapState}/>}
      <GlobalStyle />
    </>
  )
}