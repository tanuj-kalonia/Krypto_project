import React from 'react'
import "./Navbar.css"
import Logo from "../../img/logo.png"

const Navbar = () => {
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-wrapper'>
                <div className='navbar-left'>
                    <a href="#"><img id='logo-image' src={Logo} alt="Logo" /></a>
                    <h3 id='logo-heading'>DAO KING</h3>
                </div>

                <div className='navbar-right'>
                    <button className='btn btn-green'>WEBSITE</button>
                    <button className='btn btn-green-solid'>CONNECT</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar