import React from 'react'
import Fake from '../../FakeData/FakeData'
import './About.css'
import { Download } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const About = ()=>{
    
    return(
        <div className="header-content">

                <div className="h-shape">
                    <div className="image">
                        <img src={`../../users-face/1.png`} alt="sary"/>
                    </div>
                    <div className="propos">

                     <div className="text">
                    <h2 className="name">
                        Hi, Je suis <span className="name1">Jonatan AVOTRINIAINA.</span>
                        
                    </h2>
                    <h2>DEVELOPPEUR WEB</h2>
                    <p className="moi">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi repellendus impedit illum similique ipsa omnis.

                    </p>
                    <div className="btn-con">
                    <Link href="#" className="lien main-btn">
                        <span className="btn-text">
                            Downlad CV
    
                        </span>
                        <span className="btn-icon">< Download/></span>
                    </Link>
                </div>
            </div>
                </div>
            
            </div>
            
        </div>
    )
}
export default About;