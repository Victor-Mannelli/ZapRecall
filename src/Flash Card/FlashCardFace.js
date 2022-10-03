import styled from "styled-components"
import play from "../Images/arrow-play.png"

export default function FlashCardFace({QuestionIcon, setFcState, i}){
    return (
        <StyledFcFace QuestionIcon={QuestionIcon}>
            <p data-identifier="flashcard-index-item"> Questão {i + 1} </p>
            <img 
                onClick={() => setFcState("front")}
                src={ QuestionIcon === "start" ? play : undefined }
                alt=""
                data-identifier="flashcard-show-btn"
            />
            <StyledIcons QuestionIcon={QuestionIcon}>
                {QuestionIcon === "zap" ? 
                    <ion-icon data-identifier="flashcard-status" name="checkmark-circle" />
                    : QuestionIcon === "almost" ?
                    <ion-icon data-identifier="flashcard-status" name="help-circle" />
                    : QuestionIcon === "wrong" &&
                    <ion-icon data-identifier="flashcard-status" name="close-circle" />
                }
            </StyledIcons>
        </StyledFcFace>
    )
}
const StyledFcFace = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 500px;   
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
        right: 16px;
        cursor: pointer;
    }
    @media (max-width: 510px) {
        width: 70vw;  
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