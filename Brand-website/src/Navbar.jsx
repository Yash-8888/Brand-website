

function Navbar({ setShowLogin, setShowSignUp }) {
    return(
        
        <div className="navbar">
            <img src="/images/brand_logo.png" alt="" />
            <ul className="nav-links">
                <li><a href="https://www.nike.com/in/">MENU</a></li>
                <li><a href="https://www.nike.com/in/retail">LOCATION</a></li>
                <li><a href="https://www.nike.com/in/membership">ABOUT</a></li>
                <li><a href="https://www.nike.com/in/help">CONTACT</a></li>
            </ul>
            <button onClick={()=> setShowLogin(true)} className="login-btn">Login</button>
            <button onClick={()=> setShowSignUp(true)} className="Sign-up">Sign up</button>
        </div>
    )
}

export default Navbar