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
            <div className="mb-3 my-5" style={{color: props.theme.color}}>
                <h1 className="mt-5">Enter your Text to Analyze</h1>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="3"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button disabled={text.length === 0} className={`btn btn-${props.theme.btnColor} mx-2 my-2`} onClick={handleUpperCase}>To Upper Case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.theme.btnColor} mx-2 my-2`} onClick={handleLowerCase}>To Lower Case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.theme.btnColor} mx-2 my-2`} onClick={handleFirstLetterCaps}>To First Letter Caps</button>
            <button disabled={text.length === 0} className={`btn btn-${props.theme.btnColor} mx-2 my-2`} onClick={speak}>To Speak</button>
            <button disabled={text.length === 0} className={`btn btn-${props.theme.btnColor} mx-2 my-2`} onClick={handleClear}>To Clear</button>

            <div className="my-3"  style={{color: props.theme.color}}>
                <h3>Text Summary</h3>
                <p>Your text contains {text.trim().split(/\s/).filter((element)=>element.length !== 0).length} words and {text.trim().split(/\s/).filter((element)=>element.length !== 0).join(" ").length} characters</p>
                <p>Less than {Math.ceil((text.trim().split(/\s/).filter((element)=>element.length !== 0).join(" ").length) * 0.00546448087)} minutes read</p>
            </div>
        </>
    );
}
