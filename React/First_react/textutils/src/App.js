// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>


    <Navbar title="Textutils" />
    <div className="container my-5">
    <TextForm heading="Write your paragraphs here"/>

      </div> 
    
    </>
  );
}

export default App;
