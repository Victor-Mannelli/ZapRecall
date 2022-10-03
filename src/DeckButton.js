import { useState } from "react"
import styled from "styled-components"
import ReactArray from "./Flash Card/ReactArray"
import MetalGearArray from "./Flash Card/MetalGearArray"

export default function DeckButton({setDeck, deck}){
    const [collapse, setCollapse] = useState(false)
    return ( 
        <>
            <ChooseYourDeckButton 
                onClick={() => collapse === false ? setCollapse(true) : setCollapse(false) }
            >
                Escolha seu deck
                <ion-icon name="chevron-down-outline"></ion-icon>
            </ChooseYourDeckButton>
            
            <ButtonsBackground
                style={collapse === false ?{ height:"0"} : {height:"100px"}}
            >
                <ChooseYourDeckButton 
                    onClick={() => setDeck(ReactArray) }
                    style={deck === ReactArray
                        ? {background: "#FB6B6B", color: "#FFFFFF"}
                        : {backgroundColor: "#FFFFFF", color: "#ADADAD"}}
                >
                    React deck
                </ChooseYourDeckButton>
                <ChooseYourDeckButton 
                    onClick={() => setDeck(MetalGearArray)}
                    style={deck === MetalGearArray 
                        ? {background: "#FB6B6B", color: "#FFFFFF"} 
                        : {backgroundColor: "#FFFFFF", color: "#ADADAD"}}
                >
                    Metal Gear deck
                </ChooseYourDeckButton>

            </ButtonsBackground>
        </>
    )
}
const ChooseYourDeckButton = styled.button `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items:center;

    width: 72vw;
    min-height: 43px;
    padding-left: 15px;

    background-color: "#FFFFFF"; 
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    color: #ADADAD;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;

    ion-icon {
        position: absolute;
        right: 7px;
        bottom: 7px;
        font-size: 26px;
    }
`
const ButtonsBackground = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 72vw;
    background: #FFFFFF;
    overflow: hidden;
    transition: height linear 0.5s;

    button {
        width: 70vw;
        border-radius: 5px;
        border: 1px solid #FB6B6B;
    }
`