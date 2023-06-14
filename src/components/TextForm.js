import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked" + text);
    // setText("you have clicked on handleUpClick" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercae","success");
  }
  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to lowercase","success");
  }

  const handleCopy =() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy your text","success");
  }
  
  const handleExtraSpace =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("remove your extra space","success");
  }

  const handleClearClick =() =>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear your text","success");
  }
  const handleOnChange =(event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text, setText] = useState('');
  
  return (
    <>
<div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
</div>
<div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008* text.split(" ").length} Minutes read</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>

  )
}
