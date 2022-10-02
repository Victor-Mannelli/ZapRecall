import styled from "styled-components"

export default function AnsIconFooter({ansIconList}){
    return (
        <StyledUl>
            {ansIconList.map((e,i) => <ion-icon 
                key={i} 
                name={e} 
                style={
                    e === "close-circle" ?
                    {color: "#FF3030"} :

                    e === "help-circle" ?
                    {color: "#FF922E"} :

                    e === "checkmark-circle" &&
                    {color: "#2FBE34"} }
            />)}
        </StyledUl>
    )
}

const StyledUl = styled.div `
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 25px;
`