import React from 'react'
import About from '../screen/About/About'
import Competence from '../screen/Competences/Competence'
import Formation from '../screen/Formation/Formation'
import Contact from '../screen/Contact/Contact'
import {motion} from "framer-motion"
import './Portofolio.css'
import { Link } from 'react-router-dom'
const Portofolio = ()=>{
    return(
        <motion.div className="folio" style={{background:"#191d2b"}}
        initial={{ width:0 }}
        animate={{ width:"100%" }}
        exit={{ width:window.innerWidth, transition:{duration: 0.1} }}>
           <About/>
           <Competence sx={{ margin:"-8rem"}}/>
           <Formation/>
           <Contact/>
           <Link to="/">Retour</Link>
        </motion.div>
    )
}
export default Portofolio;