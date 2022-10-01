import styled from "styled-components"
import { useState } from "react"
import restart from "../Images/restart-arrow.png"
import play from "../Images/arrow-play.png"
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
    const [QuestionIcon, setQuestionIcon] = useState("start")
    
    return (
        <>
            {
            FcState === "start" ?
                <StyledQuestion QuestionIcon={QuestionIcon}>
                    <p> Questão {i} </p>
                    <img 
                        onClick={() => setFcState("front")}
                        src={ QuestionIcon === "start" ? play : undefined }
                        alt=""
                    />
                    <StyledIcons QuestionIcon={QuestionIcon}>
                        {QuestionIcon === "zap" ? 
                            <ion-icon name="checkmark-circle" />
                            : QuestionIcon === "almost" ?
                            <ion-icon name="help-circle" />
                            : QuestionIcon === "wrong" &&
                            <ion-icon name="close-circle" />
                        }
                    </StyledIcons>
                </StyledQuestion>
            : FcState === "front" ?
                <StyledFlashCard>
                    <p> {question} </p>
                    <img 
                        onClick={() => setFcState("back")}
                        src={restart} 
                        alt=""
                    />
                </StyledFlashCard>
            : FcState === "back" &&
                <StyledFlashCard >
                    <p> {answer} </p>
                    <AnswerButtons>
                        <button
                            onClick={() => {setFcState("start"); setQuestionIcon("wrong")}}
                        > Não lembrei </button>
                        <button
                            onClick={() => {setFcState("start"); setQuestionIcon("almost")}}
                        > Quase não lembrei </button> 
                        <button
                            onClick={() => {setFcState("start"); setQuestionIcon("zap")}}
                        > Zap! </button>
                    </AnswerButtons>
                </StyledFlashCard> 
            }
        </>
    )
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

    p {
        padding: 7.5px;
    }
    img, ion-icon {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const StyledQuestion = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70vw;   
    height: 65px;
    margin: 12px;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    p {
        padding: 15px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.QuestionIcon === "start" ?
            "#333333" 
            : props.QuestionIcon === "zap" ?       
            "#2FBE34"
            : props.QuestionIcon === "almost" ?
            "#FF922E"
            : props.QuestionIcon === "wrong" &&
            "#FF3030"
        };
        text-decoration-line: ${props => props.QuestionIcon === "start" ? undefined : "line-through"};
    }
    img {
        position: absolute;
        bottom: 20px;
        right: 10px;
    }
`
const AnswerButtons = styled.div `
    display: flex;
    justify-content: space-between;
    padding-top: 15px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 90vw;
        height: 40px;
        
        text-align: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        
        border-radius: 5px;
        border: none;
        padding: 5px;
        margin: 0 5px 0 5px;

        &:nth-child(1) {
            background-color: #FF3030;
        }
        &:nth-child(2) {
            background-color: #FF922E;
        }
        &:nth-child(3) {
            background-color: #2FBE34;
        }
    }
    `
const StyledIcons = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    padding-right: 15px;
    color: ${props => props.QuestionIcon === "zap" ?       
            "#2FBE34"
            : props.QuestionIcon === "almost" ?
            "#FF922E"
            : props.QuestionIcon === "wrong" &&
            "#FF3030"
        }
`