import React from 'react'
import Home from '../screen/Portofolio/Home'
import Members from '../screen/Portofolio/Members'
import Footer from '../screen/Footer/Footer'
import {motion} from "framer-motion"

const Accueil = () => {
    return (
      <motion.div 
      initial={{ width:0 }}
      animate={{ width:"100%" }}
      exit={{ width:window.innerWidth, transition:{duration: 0.1} }}
      >
        {/* <Navbar /> */}
        <Home />
        <Footer />
      </motion.div>
    );
  };
  export default Accueil;