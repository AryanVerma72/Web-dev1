import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [value , setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="Aryan"/>
      <div className="value">{value}</div>
      <button onClick={() =>{setValue(value + 1)}}>Click me</button>
      <Footer/>
     
    </div>
  );
}

export default App;
