import React, { useState } from "react";
import { questions } from "./api";
import "./question.css";
import MyQuestion from "./myquestion";
const Question = () => {
    const [data,setData]= useState(questions)
return(
    <>

{
    data.map((value) => {
        // const {id }= value
return <MyQuestion { ...value}/>
    })
}

    </>
)
}
export default Question;