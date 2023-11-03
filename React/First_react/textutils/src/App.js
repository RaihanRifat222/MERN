// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
function App() {
  return (
    <>


    <Navbar title="Textutils" />
    <div className="container my-5">
    <TextForm heading="Write your paragraphs here"/>
<About/>
      </div> 
    
    </>
  );
}

export default App;
