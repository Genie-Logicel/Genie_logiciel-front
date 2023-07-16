import React from 'react'
import './Navbar.css'
import { ShoppingCartOutlined, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <div id="header">
    <img src={`../../logo.png`} alt="sary" className='logo'/>
    <div>
        <ul id="navbar">
        <Menu id="close" style={{ fill: "black", marginTop:"-50px", marginBottom:"25px" }} />
            <li><Link to="/home" className="list active">Home</Link></li>
            <li><Link to="/blog" className="list">Blog</Link></li>
            <li><button><Link to="/about" className="list">Sign in</Link></button></li>
            <li><button><Link to="/about" className="list">Sign up</Link></button></li>
        </ul>
    </div>
    <div id="mobile">
    <Link to="#" className="list"><ShoppingCartOutlined style={{ fill: "black" }}/></Link>
      <Menu id="bar" style={{ fill: "black" }} />

    </div>
    </div> 
    )
}
export default Navbar;