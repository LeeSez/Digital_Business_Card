import React from 'react'
import './mobile.css'
import './desktop.css'
import Info from "./components/Info"
import Section from './components/Section'
import Footer from './components/Footer'

export default function App(){
    return (
        <div className='mainWrapper'>
            <Info />
            <div className=" flexCol mainContent ">
                <Section 
                    title={"About"}
                    content={"I am a Highly motivated Full Stack Developer with a passion for creating innovative and efficient solutions. Strong ability to quickly learn and adapt to new technologies and programming languages, along with strong problem-solving skills and the ability to think critically."}
                />
                <Section 
                    title={"Interests"}
                    content={"I believe there's interest in all, all you nned is the correct prespective. I found thinking the way of the mind to speak out, music, the way of the soul to speak out, and happiness, the way of the body to speak out."}
                />
            </div>
            <Footer id = {"firstFooter"}/>
        </div>
    );
}
