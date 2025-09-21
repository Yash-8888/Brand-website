function Navbar(){
    return(
        <div className="navbar">
            <img src="/images/brand_logo.png" alt="" />
            <ul className="nav-links">
                <li><a href="https://www.nike.com/in/">MENU</a></li>
                <li><a href="https://www.nike.com/in/retail">LOCATION</a></li>
                <li><a href="https://www.nike.com/in/membership">ABOUT</a></li>
                <li><a href="https://www.nike.com/in/help">CONTACT</a></li>
            </ul>
            <button className="login-btn">Login</button>
        </div>
    )
}

export default Navbar