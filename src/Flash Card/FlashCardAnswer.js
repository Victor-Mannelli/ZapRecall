import styled from "styled-components";

export default function FlashCardAnswer({answer, setFcState, setQuestionIcon, respondedCounter, setRespondedCounter, setAnsIconList, ansIconList}){
    return (
        <StyledFcAnswer>
            <p data-identifier="flashcard-answer"> {answer} </p>
            <AnswerButtons>
                <button
                    data-identifier="forgot-btn"
                    onClick={() => {
                        setFcState("start");
                        setQuestionIcon("wrong");
                        setRespondedCounter(respondedCounter + 1);
                        setAnsIconList([...ansIconList, "close-circle"]);
                    }}
                > Não lembrei </button>
                <button
                    data-identifier="almost-forgot-btn"
                    onClick={() => {
                        setFcState("start");
                        setQuestionIcon("almost");
                        setRespondedCounter(respondedCounter + 1);
                        setAnsIconList([...ansIconList, "help-circle"]);
                    }}
                > Quase não lembrei </button> 
                <button
                    data-identifier="zap-btn"
                    onClick={() => {
                        setFcState("start");
                        setQuestionIcon("zap");
                        setRespondedCounter(respondedCounter + 1);
                        setAnsIconList([...ansIconList, "checkmark-circle"]);
                    }}
                > Zap! </button>
            </AnswerButtons>
        </StyledFcAnswer> 
    )
}
const StyledFcAnswer = styled.div `

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 70vw; 
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
`
const AnswerButtons = styled.div `
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    
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
