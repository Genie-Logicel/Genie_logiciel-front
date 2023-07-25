import React from 'react'
import { Icon } from '@mui/material'
import { Code } from '@mui/icons-material'
import { Security } from '@mui/icons-material'
import "./Competence.css"
import Fake from '../../FakeData/FakeData'
const Competence = ()=>{
    
    return(
        <section className="services" id="services">
           <h2 className="heading" style={{ color: "black"}}>Competences</h2>
           <div className="services-container">
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           <div className="services-box">
           <Code style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS,Python,PHP</h6>
           </div>
           
           <div className="services-box">
           <Security style={{ fill: "#0ef", fontSize:"2rem", width:"100px", height:"100px", marginRight:"5px"}}/>
           <h3 className="titre">Langage Informatique</h3>
           
           <h6 className="langage">JS, Python, PHP</h6>
           </div>
           </div>
        </section>
    )
}
export default Competence;