<<<<<<< HEAD
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
            <Link to={item.facebook} className="btn1"><FacebookOutlined style={{ fill: "black"}}/></Link>
            <Link to={item.gitHub} className="btn1"><GitHub style={{ fill: "black"}}/></Link>
            <Link to={item.linkedIn} className="btn1"><LinkedIn style={{ fill: "black"}}/></Link>
            <Link to="/portofolio" className="btn1"><HomeOutlined style={{ fill: "#0ef"}}/></Link>
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
=======
import React from "react";
import Members from "./Members";
import CountUp from "react-countup";
const Home = () => {
  const arrayLength = 10;
  const indexArray = Array.from({ length: arrayLength }, (_, index) => index);

  return (
    <div>
      <div className="h-[75vh] flex justify-center items-center bg-white">
        <div className="grid grid-cols-2 px-[10%]">
          <div className="flex items-center">
            <div className="space-y-10">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl">
                Qui sommes-nous
              </h1>
              <p className="text-xl w-2/3">
                La communauté compte actuellement près de 90 membres actifs et
                motivés. Vous pouvez aussi nous rejoindre.
              </p>
              <div>
                <div class="md:w-1/4 sm:w-1/2 w-full">
                  <div class="px-4 py-6 flex gap-5 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-blue-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-500">
                      <CountUp start={0} end={arrayLength} duration={5}>
                        {({ countUpRef }) => (
                          <div>
                            <span
                              className="text-5xl font-bold"
                              ref={countUpRef}
                            />
                          </div>
                        )}
                      </CountUp>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-[75%]" src="/assets/images/back-co.svg" />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[5%]">
        <span className="mb-4 text-4xl text-gray-900 md:text-5xl lg:text-6x">
          Liste de tous nos membres
        </span>
      </div>

      <div className="px-[10%] py-10 flex justify-center flex-wrap gap-10">
        {indexArray.map((index) => (
          <Members />
        ))}
      </div>
    </div>
  );
};
>>>>>>> b427936a6405ddeadb62852f6eb25346c7de3b0c
export default Home;
