import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter  />
    </div>
  );
}

function Counter(props){
  const [count, setCount] = useState(0);
  function increase(){
    setCount(count+1);
  } 
  function decrease(){
    setCount(count-1);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}


export default App;
