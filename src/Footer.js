import styled from "styled-components"

export default function Footer(){
    return (
        <StyledFooter>
            <FooterButtons>
                <button
                    // onClick={}
                > Não lembrei </button>
                <button
                    // onClick={}
                > Quase não lembrei </button> 
                <button
                    // onClick={}
                > Zap! </button>
            </FooterButtons>
            <FooterH1> 0/0 CONCLUÍDOS </FooterH1>
        </StyledFooter>
    )
}

/* 
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/

const StyledFooter = styled.div `

    position: fixed;
    bottom: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    min-height: 50px;
    
    color: #333333;
    background-color: #FFFFFF;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    padding: 10px;
`
const FooterButtons = styled.div `

    display: flex;
    justify-content: space-between;

    width: 80%;
    margin: 20px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 90px;
        
        text-align: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        
        border-radius: 5px;
        border: none;
        padding:5px;

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
const FooterH1 = styled.h1 `

    font-style: normal;
    line-height: 22px;
`
