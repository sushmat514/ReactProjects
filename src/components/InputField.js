 import React,{useState} from 'react'


 
 export default function InputField(props) {
    const changeUpClicked=()=>{
        console.log("change uppercase button clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
       
    }
    const changeLowerClicked=()=>{
      console.log("change uppercase button clicked");
      let newtext = text.toLowerCase();
      setText(newtext);
     
    } 
    const changeClearClicked=()=>{
      // console.log("change uppercase button clicked");
      let newtext = "";
      setText(newtext);
     
  } 
    const OnChangeText=(event)=>{
      console.log("On change function revocked");
      setText(event.target.value);
    }
  const onCopyText=()=>{
    var copyText=document.getElementById("myBox");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);

  }
    const [text, setText] = useState("Enter the text here");
    // setText  ("Sushma");
    
   return (
    <>
        <div className=" container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.textHead}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" id="myBox" value={text} onChange={OnChangeText}rows="8"style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode==="light"?'black':'white'}} ></textarea>
            </div>
            <button className = "btn btn-primary mx-2" onClick = {changeUpClicked}>Change to uppercase</button>
            <button className= "btn btn-primary mx-2" onClick={changeLowerClicked}>Change to lowercase</button>
            <button className= "btn btn-primary mx-2" onClick={changeClearClicked}>Clear Text</button>
            <button className= "btn btn-primary mx-2" onClick={onCopyText}>Copy Text</button>
            
        </div>
        <div className ="container"style={{color:props.mode === 'dark'?'white':'black'}}>
          <h2>Text Summary</h2>
          <p>{text.split(" ").length===1?0:text.split(" ").length-1} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} time taken</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
     </>
   )
 }
 