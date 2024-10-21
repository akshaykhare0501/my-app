import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here2");
    // text = "New text"; //Wrong way to change the state
    //setText("New text"); //Correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
