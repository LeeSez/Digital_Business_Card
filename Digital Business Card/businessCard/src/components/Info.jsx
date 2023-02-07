import '../mobile.css'
import React from 'react'
import Footer from "./Footer"
import email from '../assets/email-icon.png'
import linkedin from '../assets/vector.png'

export default function Info(){
    return (
        <div className='flexCol top'>
            <div className='mainImage'></div>
            <div className="info">
                <h1>Lee Seznayove</h1>
                <p>Full Stack Developer</p>
                <div className='flexRow' id="contact">
                    <a target='_blank' href='mailto: leeseznayove@gmail.com'><div className='btnOne flexRow'>
                        <img src={email} />
                        Email
                    </div></a>
                    <a target='_blank' href='https://www.linkedin.com/in/lee-seznayove-8328391a5'><div className='btnTwo flexRow' >
                        <img src={linkedin} />
                        LinkedIn
                    </div></a>
                </div>
            </div>
            <Footer id = {"secondFooter"}/>
        </div>
    );
}