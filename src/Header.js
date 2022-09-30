import styled from "styled-components"
import logo from "./img/logo.png"

export default function Header(){
    return (
        <StyledHeader>
            <img src={logo} alt=""></img>
            <h1> ZacRecall</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div `

    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`
