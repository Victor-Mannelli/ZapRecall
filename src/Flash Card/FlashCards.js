import styled from "styled-components"
import { useState } from "react"
import restart from "../img/restart-arrow.png"
import play from "../img/arrow-play.png"
import FlashCardArray from "./FlashCardArray"

export default function FlashCards(){
    return (
        <>
            {FlashCardArray.map((e, i) => <FlashCard key={i} i = {i} answer={e.answer} question={e.question}/> )}
        </>
    )
}
function FlashCard({answer, question, i}){
    const [FcState, setFcState] = useState("start")
    if (FcState === "start") {
        return (
            <StyledQuestion>
                <p> Questão {i} </p>
                <img 
                    onClick={() => setFcState("front")}
                    src={play} 
                    alt=""
                />
            </StyledQuestion>
        )
    }
    if (FcState === "front") {
        return (
            <StyledFlashCard>
                <p> {question} </p>
                <img 
                    onClick={() => setFcState("back")}
                    src={restart} 
                    alt=""
                />
            </StyledFlashCard>
        )
    } 
    if (FcState === "back") {
        return (
            <StyledFlashCard >
                <p> {answer} </p>
            </StyledFlashCard> 
        )
    }
}

const StyledFlashCard = styled.div `

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 70vw; 
    min-height: 100px;
    margin: 12px;
    padding: 15px;

    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const StyledQuestion = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70vw;   
    height: 65px;
    margin: 12px;
    padding: 15px;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    /* img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    } */
`