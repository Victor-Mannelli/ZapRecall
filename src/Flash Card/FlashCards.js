import { useState } from "react"
import FlashCardArray from "./FlashCardArray"
import FlashCardFace from "./FlashCardFace"
import FlashCardQuestion from "./FlashCardQuestion"
import FlashCardAnswer from "./FlashCardAnswer"

export default function FlashCards({respondedCounter, setRespondedCounter, setFcQuantity}){
    setFcQuantity(FlashCardArray.length)
    return (
        <>
            {FlashCardArray.map((e, i) => 
                <FlashCard 
                    key={i} 
                    i = {i} 
                    answer={e.answer} 
                    question={e.question}
                    setRespondedCounter={setRespondedCounter}
                    respondedCounter={respondedCounter}
                /> 
            )}
        </>
    )
}
function FlashCard({answer, question, i, setRespondedCounter, respondedCounter}){
    const [FcState, setFcState] = useState("start")
    const [QuestionIcon, setQuestionIcon] = useState("start")
    
    return (
        <>
            {
            FcState === "start" ?
                <FlashCardFace QuestionIcon={QuestionIcon} setFcState={setFcState} i={i}/>
            : FcState === "front" ?
                <FlashCardQuestion setFcState={setFcState} question={question}/>
            : FcState === "back" &&
                <FlashCardAnswer 
                    answer={answer} 
                    setFcState={setFcState} 
                    setQuestionIcon={setQuestionIcon} 
                    respondedCounter={respondedCounter}
                    setRespondedCounter={setRespondedCounter}
                /> 
            }
        </>
    )
}
