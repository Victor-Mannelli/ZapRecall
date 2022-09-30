import styled from "styled-components"
import { useState } from "react"
import restart from "../img/restart-arrow.png"
import play from "../img/arrow-play.png"
import FlashCardArray from "../Flash Card/FlashCardArray"

export default function FlashCards(){
    return (
        <>
            {FlashCardArray.map((e, i) => <FlashCard key={i} answer={e.answer} question={e.question}/> )}
        </>
    )
}
function FlashCard({answer, question}){
    const [FcState, setFcState] = useState("front")

    if(FcState === "front") {
        return (
            <StyledFrontSide>
                <p> {question} </p>
                <img 
                    onClick={() => setFcState("back")}
                    src={play} 
                    alt=""
                />
            </StyledFrontSide>
        )
    } else {
        return (
            <StyledBackSide >
                <p> {answer} </p>
                <img 
                    onClick={() => setFcState("front")}
                    src={restart} 
                    alt=""/>
            </StyledBackSide> 
        )
    }
}

const StyledBackSide = styled.div `

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 300px;
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
const StyledFrontSide = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;   
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