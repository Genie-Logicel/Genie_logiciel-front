import React from 'react'
import Fake from '../../FakeData/FakeData'
import './Contact.css'
import { Download, GitHub, Home } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Facebook } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Map } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
const Contact = ()=>{
    
    return(
        <div className="contact-container">
                <div className="main-title">
                    <h2 style={{fontSize:"4rem"}}>Contact</h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. saepe, eligendi dolorem ratione amet! Repellendus.</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <Map className="sary"/>
                                Location
                            </div>
                            <p>
                            <small> 
                                :London, United Kingdom
                                </small>
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <Email className="sary"/>
                                <span>Email</span>
                            </div>
                            <p>
                                <small>
                                    :avotrajonatan@gmail.com
                                </small>
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <Home Email className="sary"/>
                                <span>Education</span>
                            </div>
                            <p>
                                <small>
                                    :EMIT Universite de Fianarantsoa
                                </small>
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <Phone Email className="sary"/>
                                <span>Telephone</span>
                            </div>
                            <p>
                                <small>
                                    :O34 87 042 33
                                </small>
                            </p>
                        </div>
                    </div>

                    <div className="contact-icons">
                        <div className="contact-icon">
                            <Link href="www.facebook.com" target="_blank" className="lien">
                                <Facebook className="icon1"/>
                           </Link>
                            <Link href="www.facebook.com" target="_blank" className="lien">
                            <LinkedIn className="icon1"/>
                           </Link>
                            <Link href="www.facebook.com" target="_blank" className="lien">
                            <WhatsApp className="icon1"/>
                           </Link>
                            <Link href="www.facebook.com" target="_blank" className="lien">
                            <GitHub className="icon1"/>
                           </Link>
                        </div>
                    </div>
                    </div>
                    <div className="rigth-contact">
                        <form action="" className="contact">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME"/>
                                <input type="text" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT"/>
                            </div>
                            <div className="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <button className="btn btn-success">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
    )
}
export default Contact;