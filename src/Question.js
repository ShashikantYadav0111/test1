import { useState } from "react";
import Poll from "./PollWindow";
import "./Question.css";

export function Ask(){
    const [values,setValues] = useState({
        question:"",
        option1:"",
        option2:""
    });
    const [submitted,setSubmit] = useState(false);
    const handleQuestionChange = (e)=>{
        setValues({...values,question:e.target.value})
    }
    const handleOption1Change = (e)=>{
        setValues({...values,option1:e.target.value})
    }
    const handleOption2Change = (e)=>{
        setValues({...values,option2:e.target.value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setSubmit(true);
    }
    const handleReset = ()=>{
        setSubmit(false);
    }
    return (<div className="maindiv">
            {submitted ? <div className="maincard"><Poll question={values.question} option1={values.option1} option2={values.option2}/> <button onClick={handleReset} type="reset">reset</button></div>:<form className="formcss" onSubmit={handleSubmit}>
            <h1>Create POLL</h1>
            <input onChange={handleQuestionChange} name="question" placeholder="Enter question" value={values.question}></input>
            <input onChange={handleOption1Change} name="option1" placeholder="Enter option1" value={values.option1}></input>
            <input onChange={handleOption2Change} name="option2" placeholder="Enter option2" value={values.option2}></input>
            <button type="submit">Create</button>
            
        </form>}</div>
    )
}