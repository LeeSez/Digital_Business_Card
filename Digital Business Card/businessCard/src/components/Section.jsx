import '../mobile.css'
import React from 'react'

export default function Section({title,content}){
    return (
        <div className='section'>
            <h3 className="sectionTitle">{title}</h3>
            <p>{content}</p>
        </div>
    );
}