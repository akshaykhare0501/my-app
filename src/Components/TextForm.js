import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");
    const [separator, setSeparator] = useState(",");
    // text = "New text"; //Wrong way to change the state
    //setText("New text"); //Correct way to change the state

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        // setText("You have clicked on handleUpClick");
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Text has been converted to Uppercase!", "success");
    }

    const handleLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Text has been converted to Lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let clearText = '';
        setText(clearText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick = ()=>{
        if(text.length>0){
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
        }
        else{
            alert("No text to copy");
        }

    }

    const RemoveExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const SentenceCase =()=>{
        let new_sentence = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setText(new_sentence);
        props.showAlert("Text has been converted to Sentence Case!", "success");
    }

    const handleSeparatorChange = (event) => {
        setSeparator(event.target.value);
    };

    const handleSplitText = () => {
        let splitText = text.split(separator);
        let formattedText = splitText
            .map((item, index) => {
                if (index !== splitText.length - 1) {
                    return item.trim() + separator;
                }
                return item.trim();
            })
            .join("\n");
        setText(formattedText);
        props.showAlert("Text has been formatted!", "success");
    };

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}> 
            {/* #042743 */}
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className"form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#09365a':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter your text here'></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={SentenceCase}>Convert to Sentense Case</button>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" id="copy" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

            <div className="my-3">
                    <label htmlFor="separatorInput">Enter custom separator:</label>
                    <input
                        type="text"
                        id="separatorInput"
                        className="form-control"
                        value={separator}
                        onChange={handleSeparatorChange}
                        placeholder="e.g., , ; /"
                        style={{backgroundColor: props.mode==='dark'?'#09365a':'white', color: props.mode==='dark'?'white':'#042743'}}
                    />
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSplitText}>
                        Split by Separator
                    </button>
                </div>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h3>Your text summary</h3>
            <p>{text.trim().split(/[.?!]/).length-1} sentences, {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

            <h4>Time to read</h4>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>

            <h4>Text Preview</h4>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
