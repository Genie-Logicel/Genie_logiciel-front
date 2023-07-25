import React from 'react'
import About from '../screen/About/About'
import Competence from '../screen/Competences/Competence'
import Formation from '../screen/Formation/Formation'
import Contact from '../screen/Contact/Contact'
import './Portofolio.css'
const Portofolio = ()=>{
    return(
        <div className="folio" style={{background:"#191d2b"}}>
           <About/>
           <Competence sx={{ margin:"-8rem"}}/>
           <Formation/>
           <Contact/>
        </div>
    )
}
export default Portofolio;