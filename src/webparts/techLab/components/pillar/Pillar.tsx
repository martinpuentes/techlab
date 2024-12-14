
import './pillar.css'
import React from "react";

export const  Pillar = ({logoPath, num, description}) => {
    return(
        <div className="pillar-container">
            <img className='pillar-logo' src={logoPath}/>
            <h2 className='card-num'>{num}</h2>
            <p className='pillar-description'>{description}</p>
        </div>
    )
} 


