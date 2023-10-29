import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Textbox(props) {
  const [email, setEmail] = useState('raihanrifat222@gmail.com')
  const[essay, setEssay] = useState('')
  const handleEmailOnChange = (event) => {
    setEmail(event.target.value)
  }

  const handleEssayOnChange = (event) => {
    setEssay(event.target.value)
  }

//   const spellCheck = () => {
//     <ReactQuill theme="snow" value={essay} onChange={setEssay} />
//   }

  return (
    <div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"><b>Enter your email here</b></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmailOnChange}/>
</div>

{/* <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>{props.headline}</b></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" placeholder="Start your essay" onChange={handleEssayOnChange} value={essay}></textarea>
</div> */}
<ReactQuill theme="snow" value={essay} onChange={setEssay}  />;
<button className="btn btn-primary" type="submit" >Submit</button>
    </div>
  )
    

}
