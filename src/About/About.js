import React from 'react'
import { FacebookOutlined, Google, Twitter, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import './About.css'
const About = () => {
    return(
        <section className="home" id="home">
        <div className="home-content">
        <h3>Hello, It's me</h3>
        <h1>John Kendric</h1>
        <h3>And I'm a <span>Frontend Developer</span></h3>
        <p>Lorem, ipsum color sit amet consectetur adipisicing elit. Tempore aliquam, modi aspernateur placeat</p>
        <div className="social-media">
        <Link to="/home" className="list active"><IconButton className="btn1"> <FacebookOutlined style={{ fill: "#0ef", "&:hover": { color: "#323946" } }} className="test"/></IconButton></Link>
            <Link to="/blog" className="list"><IconButton className="btn1"> <FacebookOutlined style={{ fill: "#0ef"}}/></IconButton></Link>
            <Link to="/about" className="list"><IconButton className="btn1"> <FacebookOutlined style={{ fill: "#0ef"}}/></IconButton></Link>
            <Link to="/about" className="list"><IconButton className="btn1"> <FacebookOutlined style={{ fill: "#0ef"}}/></IconButton></Link>
        </div>
        <Link to="#" className="btn">Download CV</Link>
    </div>
    <div className="home-img">
    <img src={`../users-face/3.png`} alt="sary" className='logo'/>
    </div>
    </section>
    )
}
export default About;