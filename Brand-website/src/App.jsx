
import { useState } from 'react'
import Navbar from './navbar'
import Content_B from './Content-B'
import Footer from './footer'
import LoginPage from './login-page'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} /> 
      <Content_B></Content_B>
      <Footer></Footer>
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
      
    </>
  )
}

export default App
