import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    // text = "New text"; //Wrong way to change the state
    //setText("New text"); //Correct way to change the state

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        // setText("You have clicked on handleUpClick");
        let upText = text.toUpperCase();
        setText(upText);
    }

    const handleLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleClearClick = ()=>{
        let clearText = '';
        setText(clearText);
    }

    const handleCopyClick = ()=>{
        if(text.length>0){
        navigator.clipboard.writeText(text);
        alert("Text copied");
        }
        else{
            alert("No text to copy");
        }

    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter your text here'></textarea>
            </div>
            <button className="btn btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn btn-primary mx-1" id="copy" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words, {text.length} characters</p>

            <h4>Time to read</h4>
            <p>{0.008*(text.split(" ").length)} Minutes</p>

            <h4>Text Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
