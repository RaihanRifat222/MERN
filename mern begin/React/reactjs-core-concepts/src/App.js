import logo from './logo.svg';
import './App.css';


const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Bappi', 'Shuvo']
const jobs = ['Web Developer', 'Web Designer', 'Software Engineer', 'Programmer', 'Developer', 'Frontend Developer']
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}/>)
      }
      <Person name='Rifat' job = 'student'/>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{border: '2px solid gold', width: '400px', margin: '10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
