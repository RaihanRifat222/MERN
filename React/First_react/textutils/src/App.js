// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');

  const changeMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1d2731';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>


    <Navbar title="Textutils" mode = {mode} changeMode = {changeMode}/>
    <div className="container my-5">
    <TextForm heading="Write your paragraphs here" mode={mode}/>
<About mode={mode}/>
      </div> 
    
    </>
  );
}

export default App;
