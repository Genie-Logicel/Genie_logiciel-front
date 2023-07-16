import React from 'react'
import { Icon } from '@mui/material'
import { Code } from '@mui/icons-material'
import { Security } from '@mui/icons-material'
import "./Competence.css"
const Competence = ()=>{
    return(
        <section className="services" id="services">
           <h2 className="heading">Competences</h2>
           <p className="underline"></p>
           <div className="services-container">
           <div className="services-box">
           <Icon className="icon"><Code style={{ fill: "#fff", fontSize:"2rem", width:"270px", height:"270px", marginRight:"5px"}}/></Icon>
           <h3>Langage Informatique</h3>
           
           <p>JS, Python, PHP</p>
           </div>
           <div className="services-box">
           <Icon className="icon"><Code style={{ fill: "#fff", fontSize:"2rem", width:"70px", height:"70px", marginRight:"5px"}}/></Icon>
           <h3 className="titre">Langage Informatique</h3>
           
           <p className="competence">JS, Python, PHP</p>
           </div>
           <div className="services-box">
           <Icon className="icon"><Code style={{ fill: "#fff", fontSize:"2rem", width:"70px", height:"70px", marginRight:"5px"}}/></Icon>
           <h3>Langage Informatique</h3>
           
           <p>JS, Python, PHP</p>
           </div>
           <div className="services-box">
           <Icon><Security style={{ fill: "#blue", fontSize:"1rem", width:"25px", height:"25px", marginRight:"5px"}}/></Icon>
           <h3>Langage Informatique</h3>
           <p>JS, Python, PHP</p>
           </div>
           </div>
        </section>
    )
}
export default Competence;