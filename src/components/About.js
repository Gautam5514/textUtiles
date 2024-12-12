import React, { useState } from 'react'

export default function About(props) {

    // const[myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
  
    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }


    // const [btntext, setBtntext] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtntext("Enable light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext("Enable Dark Mode");
    //     }
    // }

  return (
    <div className="container">
        <h1 className="my-3"style={{color:props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Show Info </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>What is it?</strong> It help when you write the message and mail in any of the other people.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Help ?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>To Customize your Format</strong> If you send the message of any people who has need to write any thing in under of word.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Need ?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Writing Important messages</strong> You want to test how much time to take for the writing
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
</div> */}
    </div>
  )
}
