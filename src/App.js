import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Main from "./Flash Card/Main"
import Footer from "./Footer";
import Header from "./Header";

export default function App() {

  return (
    <StyledApp>
      < Header />
      < Main /> 
      < Footer />
      < GlobalStyle />
    </StyledApp>
  );
}

const StyledApp = styled.div `

  display: flex;  
  flex-direction: column;
  align-items: center;
  
  background-color: #FB6B6B;

  width: 100vw;
  min-height: 100vh;
  margin: 0px;
  padding: 0 0 200px 0;
`
