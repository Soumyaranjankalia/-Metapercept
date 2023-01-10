import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Nav } from './components/Nav'
import { HeroContent } from './components/HeroContent'
import { Classes } from './components/Classes'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <HeroContent/>
      <Classes/>
      <Footer/>
    </div>
  )
}

export default App
