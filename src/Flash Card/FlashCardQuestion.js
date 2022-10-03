import styled from "styled-components"
import restart from "../Images/restart-arrow.png"

export default function FlashCardQuestion({setFcState, question}){
    return (
        <StyledFlashCard>
            <p data-identifier="flashcard-question"> {question} </p>
            <img
                onClick={() => setFcState("back")}
                src={restart} 
                alt=""
                data-identifier="flashcard-turn-btn"
            />
        </StyledFlashCard>
    )
}
const StyledFlashCard = styled.div `

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 500px; 
    min-height: 100px;
    margin: 12px;
    padding: 17px;

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
        cursor: pointer;
    }
    @media (max-width: 510px) {
        width: 70vw;  
    }
`