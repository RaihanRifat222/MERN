// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  let bgcolor= 'white';

  const changeMode = (newMode)=> {
    setMode(newMode);
    if (mode === 'light'){
      // setMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
    else if(mode === 'blue'){
      document.body.style.backgroundColor = '#3f69a8';
      showAlert('Blue mode has been enabled', 'success');
      bgcolor = '#3f69a8';
    }
    else if(mode === 'grey'){
      document.body.style.backgroundColor = '#c0c0c0';
      showAlert('Grey mode has been enabled', 'success');
      bgcolor = '#c0c0c0';
    }
    else if(mode === 'green'){
      document.body.style.backgroundColor = '#20543b';
      showAlert('Green mode has been enabled', 'success');
      bgcolor = '#20543b';
    }
    else if(mode === 'red'){
      document.body.style.backgroundColor = '#7a4e4e';
      showAlert('Red mode has been enabled', 'success');
      bgcolor = '#7a4e4e';
    }
    else if(mode === 'yellow'){
      document.body.style.backgroundColor = '#c0b183';
      showAlert('Yellow mode has been enabled', 'success');
      bgcolor = '#c0b183';
    }
    else if(mode === 'dark'){
      document.body.style.backgroundColor = '#1d2731';
      showAlert('Dark mode has been enabled', 'success');
      bgcolor = '#1d2731';
    }
    else{
      // setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      bgcolor= 'white';
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>

    <Router>
    <Navbar title="Textutils" mode = {mode} changeMode = {changeMode}/>
    <Alert alert={alert}/>

    <div className="container my-5">

    <Routes>
      <Route path="/about" element={<About mode={mode}/>}> </Route>
      <Route path='/' element= {<TextForm heading="Write your paragraphs here" mode={mode} showAlert={showAlert} bgcolor = {bgcolor}/>}> </Route>
    </Routes>
   
    

    {/* <TextForm heading="Write your paragraphs here" mode={mode} showAlert={showAlert} bgcolor = {bgcolor}/>
<About mode={mode}/> */}
      </div> 
      </Router>
    </>
  );
}

export default App;
