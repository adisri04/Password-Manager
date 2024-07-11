/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
