import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Aryan")
  const [form, setForm] = useState({email : "" , phone : ""})
 
  const handleClick = ()=>{
    alert("I am clicked")
  }
  const mouseHover = ()=>{
    alert("I am mouse Hover")
  }
  
  const handleChange = (e) =>{
    setForm({...form , [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className='reddd' onMouseOver={mouseHover}>I am a Div</div>

    <input type="text" value = {name} onChange = {handleChange} />

    <input type="text" name='email' value={form.eamil} onChange={handleChange} />
    <input type="text" name='phone' value={form.phone} onChange={handleChange} />

    </>
  )
}

export default App
