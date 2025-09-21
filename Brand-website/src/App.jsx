import { useState } from 'react'
import Navbar from './navbar'
import Content_B from './Content-B'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Content_B></Content_B>
    </>
  )
}

export default App
