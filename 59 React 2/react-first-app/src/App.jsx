import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

function App() {
  

  return (
    <>
     <Navbar/>
     <Footer/>
     <div className="cardd">

     <Card title="Card 1" description="Card 2" />
     <Card title="Card 2" description="Card 2" />
     <Card title="Card 3" description="Card 2" />
     <Card title="Card 4" description="Card 2" />
     </div>
     

    </>
  )
}

export default App
