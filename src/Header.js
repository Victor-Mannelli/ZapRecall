import styled from "styled-components"
import logo from "./Images/logo.png"

export default function Header(){
    return (
        <StyledHeader>
            <img src={logo} alt=""></img>
            <h1
                onClick={() => window.location.reload()}
            > ZacRecall</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 20px 0;
    img {
        width: 80px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
    @media (max-width: 400px) {
        img {
            width: 52px;
        }
        h1 {
            font-size: 36px;
        }
    }
`
