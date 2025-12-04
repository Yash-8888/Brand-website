
import { useState } from 'react'
import Navbar from './Navbar'
import Content_B from './Content-B'
import Footer from './Footer'
import LoginPage from './login-page'
import SignUpPage from './Sign-up'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [ShowSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}/> 
      <Content_B></Content_B>
      <Footer></Footer>
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
      {ShowSignUp && <SignUpPage setShowSignUp={setShowSignUp} />}
    </>
  )
}

export default App
