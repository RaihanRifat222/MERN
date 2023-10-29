import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
function App() {
  return (
    <div className="App">
     <Navbar name="IELTS Ninja"/>
      <Textbox headline="Write your essay here" />
    </div>
  );
}

export default App;
