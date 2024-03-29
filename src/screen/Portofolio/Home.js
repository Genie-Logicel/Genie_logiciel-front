import React from 'react'
import './Portofolio.css'
import { FacebookOutlined, LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Fake from '../../FakeData/FakeData'
import { Link } from 'react-router-dom'
import { HomeOutlined } from '@mui/icons-material'
const Home = () =>{
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/users-face/1.png)`,
      };
      let tester = ""
    tester= Fake.map((item)=>{
        return(
            <div className="portofolio" key={item.id}>
            <img src={`../../users-face/1.png`} alt=""/>
            <p className="nom">{item.name}</p>
            <p className="specialite">{item.specialite}</p>
            <div className="Icon">
            <Link to="/portofolio"><button className="btn1">Voir Profil</button></Link>
            </div>
           
           </div>
        )
    })
    return(
        <div className="genie">
            <div className="font" style={backgroundStyle}>

    <h1>Qui sommes-nous</h1>
    <p>La communauté compte actuellement près de 90 membres actifs et motivés. Vous pouvez aussi nous rejoindre.</p>
   </div>
   <span className="membre">Tous les membres</span>
   <div className="home">
   
{tester}
            
</div>
            
        </div>
    )
}
export default Home;
