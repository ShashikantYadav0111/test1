import { useState } from "react";
import "./Question.css";



export default function Poll(props){
    const [option1,countOptio1] = useState(0);
    const [option2,countOptio2] = useState(0);
    const [totalVote,setTotalVote] = useState(0);
    const handleClick1= (event)=>{
        countOptio1(option1+1);
        setTotalVote(totalVote+1);

    }
    const handleClick2= (event)=>{
        countOptio2(option2+1);
        setTotalVote(totalVote+1);
    }
    return (<div classNmae="maincard">
        <h1>{props.question}</h1>
        <button onClick={handleClick1}>{props.option1}</button>:{((option1/totalVote)*100).toFixed(2)}%
        <button onClick={handleClick2}>{props.option2}</button>:{((option2/totalVote)*100).toFixed(2)}%
        </div>
    )
}