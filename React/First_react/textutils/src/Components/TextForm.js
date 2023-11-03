import React, {useState} from 'react';


export default function TextForm(props) {

const handleUpClick =()=>{
  
    let newText = text.toUpperCase();
    setText(newText);
}

const handleOnChange =(event)=>{
    
    setText(event.target.value);
}

const clearText =(event)=>{
  setText("");
}
const [text, setText] = useState('');

  const copyText =()=>{
    let text = document.getElementById('myBox');
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
    <div className='container'>
          <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={ text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <div className="container my-2">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
    
        <button type='button' onClick={copyText} className="btn btn-dark mx-1 ">Copy</button>
        </div>

  
    </div>

    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length } words, {text.length} characters</p>
    </div>


    </>
  )
}

