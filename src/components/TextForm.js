import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handleClear = () => {
        const newText = ''
        setText(newText)
        props.alert("The text is cleared","success")
    }

    const handleFirstLetterCaps = () => {
        let textArr = text.trim().split(" ")
        textArr = textArr.map((element)=>{
            return element[0].toUpperCase() + element.slice(1).toLowerCase()
        })
        console.log(textArr);
        let newText = textArr.join(" ")
        setText(newText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>


    return (
        <>
            <div className="mb-3 my-5" style={{color: props.mode==='light'?'black':'white'}}>
                <h1 className="mt-5">Enter your Text to Analyze</h1>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="3"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>To Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>To Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleFirstLetterCaps}>To First Letter Caps</button>
            <button className="btn btn-primary mx-2" onClick={speak}>To Speak</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>To Clear</button>

            <div className="my-3"  style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Text Summary</h3>
                <p>Your text contains {text.trim().split(" ")[text.trim().split(" ").length - 1] === "" ? text.trim().split(" ").length - 1 : text.trim().split(" ").length} words and {text.trim().length} characters</p>
                <p>Less than {Math.ceil((text.trim().split(" ")[text.trim().split(" ").length - 1] === "" ? text.trim().split(" ").length - 1 : text.trim().split(" ").length) * 0.00546448087)} minutes read</p>
            </div>
        </>
    );
}
