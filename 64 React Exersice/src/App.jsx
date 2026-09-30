import { useState , useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)

  }

  useEffect (() =>{
    fetchData()
  
  },[])
 

  return (
    <>
   <div className="container bg-amber-500">
    {cards.map((card)=>{
      return <div key={card.id} className="card bg-amber-400">
        <h1>{card.title}</h1>
        <p>{card.body}</p>
        <span>{card.userId}</span>
    </div>
    })}
    
   </div>
    </>
  )
}

export default App
