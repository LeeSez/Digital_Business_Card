import '../style.css'
import React from 'react'
import twitter from '../assets/twitter-icon.png'
import facebook from "../assets/facebook-icon.png"
import github from '../assets/gitHub-icon.png'
import insta from '../assets/instagram-icon.png'

export default function Footer(){
    return (
        <footer className='flexRow'>
            <div className='flexRow' id="container">
                <a target='_blank' href='https://twitter.com/leekosh22'><img src={twitter} /></a>
                <a target='_blank' href='https://www.facebook.com/profile.php?id=100013705267748'><img src={facebook} /></a>
                <a target='_blank' href='https://www.instagram.com/im_lee102/'><img src={insta} /></a>
                <a target='_blank' href='https://github.com/LeeSez'><img src={github} /></a>
            </div>
        </footer>
    );
}