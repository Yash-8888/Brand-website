function Navbar(){
    return(
        <div className="navbar">
            <img src="/images/brand_logo.png" alt="" />
            <ul className="nav-links">
                <li><a href="#">MENU</a></li>
                <li><a href="#">LOCATION</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <button className="login-btn">Login</button>
        </div>
    )
}

export default Navbar