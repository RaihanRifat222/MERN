import React, {useState} from 'react';


export default function TextForm(props) {

const handleUpClick =()=>{
   
    if (text.length === 0){
      props.showAlert('Please enter some text', 'danger');
    }
    else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted to uppercase', 'success');
    }
    
    
}

const handleOnChange =(event)=>{
    
    setText(event.target.value);
}

const clearText =(event)=>{
  if (text.length === 0){
    props.showAlert('Please enter some text', 'danger');
  }
  else{
    setText('');
    props.showAlert('Text has been cleared', 'success');
  }
  
}
const [text, setText] = useState('');

  const copyText =()=>{
     if (text.length === 0){
      props.showAlert('Please enter some text', 'danger');}
      else{
        let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been copied', 'success');
      }


  }

  return (
    <>
    <div className='container'>
          <h1 className={`text-${props.mode===`light`?`dark`:`light`}`}>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={ text} onChange={handleOnChange} style={{backgroundColor: props.mode === `light`? `white`: `#132333`, color: props.mode === `light`? `black`: `white`}} id="myBox" rows="10"></textarea>
        </div>
        <div className="container my-2">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
    
        <button type='button' onClick={copyText} className="btn btn-dark mx-1 ">Copy</button>
        </div>

  
    </div>

    <div className="container my-2">
      <h1 className={`text-${props.mode===`light`?`dark`:`light`}`}>Your text summary</h1>
      <p className={`text-${props.mode===`light`?`dark`:`light`}`}>{text.split(" ").length } words, {text.length} characters</p>
    </div>


    </>
  )
}

