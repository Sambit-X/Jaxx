import { useState } from 'react'
import Navbar from './components/Navbar'
import Caraosel from './components/Caraosel'
import Cardset from './components/Cardset'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar></Navbar>
      <Cardset></Cardset>
      <Footer></Footer>
    </>
  )
}

export default App
