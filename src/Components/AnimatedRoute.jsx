import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Portofolio from "../Portofolio/Portofolio"
import Accueil from './Accueil';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoute = ()=>{
    const location = useLocation()
    return(
       <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Accueil/>}/>
            <Route exact path="/portofolio" element={<Portofolio />}/>
       </Routes>
      </AnimatePresence>
    )
}
export default AnimatedRoute;