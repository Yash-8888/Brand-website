
import { useState } from 'react'
import Navbar from './navbar'
import Content_B from './Content-B'
import Footer from './footer'
import LoginPage from './login-page'

function App() {
  const [ShowLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Content_B></Content_B>
      <Footer></Footer>
      <LoginPage />
      
    </>
  )
}

export default App
