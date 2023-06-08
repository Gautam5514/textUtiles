import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked" + text);
    // setText("you have clicked on handleUpClick" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange =(event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  
  return (
    <>
<div className="container">
  <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
</div>
<div className="container">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008* text.split(" ").length} Minutes read</p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
</>

  )
}
