<<<<<<< HEAD
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
=======
import React from "react";
import { Icon } from "@mui/material";
import { Code } from "@mui/icons-material";
import { Security } from "@mui/icons-material";
// import "./Competence.css"
import Fake from "../../FakeData/FakeData";
const Competence = () => {
  return (
    <div className="grid grid-cols-1 px-[10%] pb-10">
      <div className="flex justify-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Competences
        </h1>
      </div>
      <div className="flex justify-center items-center" id="services">
        <div className="flex justify-center gap-10">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Code
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS,Python,PHP</h6>
          </div>

          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Security
              style={{
                fill: "#0ef",
                fontSize: "2rem",
                width: "100px",
                height: "100px",
                marginRight: "5px",
              }}
            />
            <h3 className="titre">Langage Informatique</h3>

            <h6 className="langage">JS, Python, PHP</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Competence;
>>>>>>> b427936a6405ddeadb62852f6eb25346c7de3b0c
