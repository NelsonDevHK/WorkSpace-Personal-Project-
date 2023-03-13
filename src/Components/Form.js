import React,{useState} from "react";

export const Form = ({setYoutubeLink}) => {

    const[input,setInput] = useState('');
    const displayText = 'LET\'S GOOO';
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setYoutubeLink(input);
        setInput('');
    }

    return(
        <form className="StartBar" onSubmit={handleSubmit}>
            <input type='text' className="inputBox" placeholder="Enter PlayList required" 
            onChange={(e)=> setInput(e.target.value)} value={input || ''}/>
            <div>
            <button type="submit" className="StartButton">{displayText}</button>
            </div>
        </form>
    )
}