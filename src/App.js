import GlobalStyle from "./GlobalStyles";
import { useState } from "react";
import FlashCardPage from "./Pages/FlashCardPage";
import HomeScreen from "./Pages/HomeScreen";

export default function App() {
  const [zapState, setZapState] = useState(false)
  return (
    <>
      {zapState ? <FlashCardPage/> : <HomeScreen setZapState={setZapState}/>}
      <GlobalStyle />
    </>
  )
}