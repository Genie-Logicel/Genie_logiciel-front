import React from 'react'
import About from '../About/About'
import Competence from '../screen/Competences/Competence'
import './Portofolio.css'
const Portofolio = ()=>{
    return(
        <div className="portofolio">
           <About/>
           <Competence sx={{ margin:"-8rem"}}/>
        </div>
    )
}
export default Portofolio;