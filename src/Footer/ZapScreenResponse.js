import styled from "styled-components"
import { useState, useEffect } from "react"

export default function ZapScreenResponse({ansIconList, inputValue, deck, RespondedCounter}){
    const [counter, setCounter] = useState(0);
    let checkmarkList = []
   
    useEffect(() => {

        ansIconList.forEach((e,i) => {
            if (ansIconList[i] === "checkmark-circle") { 
                checkmarkList.push(e)
            }
            counter < inputValue && setCounter(checkmarkList.length)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ansIconList])

    if (counter < inputValue && RespondedCounter === deck.length) {
        return <FooterH1> Putz, não deu </FooterH1>
    }
    if (counter === Number(inputValue) && RespondedCounter <= deck.length) {
        return <FooterH1> Parabens você alcançou a sua meta de Zaps! </FooterH1>
    }
    if (counter < inputValue && RespondedCounter < deck.length) {
        return <FooterH1> Meta de Zaps: {counter}/{inputValue} </FooterH1>
    }
}
const FooterH1 = styled.h1 `
    text-align: center;
    font-style: normal;
    line-height: 22px;
    padding-top: 7px;
`