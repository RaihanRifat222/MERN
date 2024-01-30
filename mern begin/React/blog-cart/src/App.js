import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="blogs">
        <Blogs image= '1' authorImg = 'boy1' author='Mr. Raju' date='Mar 14' title= 'How to get your first job as a self-taught programmer'/>
      </div>
      
    </div>
  );
}

export default App;
