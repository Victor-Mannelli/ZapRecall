import styled from "styled-components"
import AnsIconFooter from "./AnsIconFooter"
import ZapScreenResponse from "./ZapScreenResponse";

export default function Footer({RespondedCounter, ansIconList, deck, inputValue}){
    return (
        <>
            <StyledFooter>
                <ZapScreenResponse ansIconList={ansIconList} inputValue={inputValue} deck={deck} RespondedCounter={RespondedCounter} />
                <FooterH1 data-identifier="flashcard-counter"> {RespondedCounter}/{deck.length} CONCLUÍDOS </FooterH1>
                <AnsIconFooter ansIconList={ansIconList}/>
            </StyledFooter>
        </>
    )
}
const StyledFooter = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    min-height: 100px;
    
    color: #333333;
    background-color: #FFFFFF;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
`
const FooterH1 = styled.h1 `
    text-align: center;
    font-style: normal;
    line-height: 22px;
    padding-top: 7px;
`