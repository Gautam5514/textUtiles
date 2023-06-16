import React, {useState} from 'react'

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
        <strong>Tu kon </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>SBSE PAHLA KAAM</strong> Ha to ate hain Apna baat pe ..... Pahli baat to jo tum tiktam tiktam chalti ho Mana a teri high heels ki galti ... A to bata tu hai kon kaha se ayi ho kaha ko jayegi mujhe marawayegi  Pagal banweyegi
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Karte hain</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>To bina late kiye.</strong> Ha to chalte hai bina koi bakwash kiye apni baat pe Mere bare mai janne se koi fayda nhi.. bas Mazza kro or Chill maro yrr
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Khatam</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the last.</strong> Ha to Kya .....Sun raha hai na Sun rhi hu mai 
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
