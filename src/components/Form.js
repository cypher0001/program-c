import React,{useState} from 'react'

export default function Form(props) {

  const  UpClick = () =>{
   // console.log("on click event here");
    let textUp=Text.toUpperCase();
    setText(textUp);
    
  }
  const handleOnChange=(event)=>{
   // console.log("onChanging"+Text);
    setText(event.target.value);

  }
  const LowClick=()=>{
    let textLow=Text.toLowerCase();
    setText(textLow);
  }

  const [Text, setText] = useState("Enter text here");
  return (
    <>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
          <form>
            
              <div className="form-group mb-3">
              <h1>{props.heading}</h1>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#212529' , color:props.mode==='light'?'black':'white' }} value={Text} onChange={handleOnChange}></textarea>
              </div>
          </form>
            <button type="button" className="btn btn-primary" onClick={UpClick} style={{margin:'5px'}} >Convert to UpperCase</button>
            <button type="button" className="btn btn-primary" onClick={LowClick} style={{margin:'5px'}} >Convert to LowerCase</button>   
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Summary</h1>
        <p>Your text have {Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>Average time to read  { 0.008* Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Your text:</h2>
        <p>{Text}</p>
      </div>
    </>
  )
}
