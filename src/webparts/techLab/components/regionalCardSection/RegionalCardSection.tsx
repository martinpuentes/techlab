import React from "react";
import './regionalCardSection.css'

import {RegionalCard} from '../regionalCard/RegionalCard';
import './RegionalCardSection.css'
import { useState } from 'react';
import Map from '../map/Map';
//import {OpMap} from '../OpMap/OpMap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const RegionalCardSection = ({techlabs})=>{
    
    const [isOn, setIsOn] = useState(false);
    
    const handleToggle = () => {
        setIsOn(!isOn);
      };

      

    
    
      

    return(
        <div className='general-section-container'>
            <div className='view-map-container'>
                <p>view map</p>
                <label className="switch">
                    <input type="checkbox" onChange={handleToggle}  />
                    <span className="slider"></span>
                </label>
            </div>
            
            

            {
                isOn ? <Map />
                : 
                <div className='card-section-container'>
                    {
                        techlabs.map((item, i) => {
                            console.log("--------")
                            
                            const imageUrl = item?.CardImage?.Url || "https://idbg.sharepoint.com/:i:/r/sites/tech_lab/Images%20Library/backgroundProjects.jpg?csf=1&web=1&e=stF9g4";
                            
                            return(
                                <Link style={{textDecoration:'none'}} key={item.Title} to={`/regional/${item.Title}`}>
                                    <RegionalCard nombre = {item.Title} image={imageUrl } outlook={item.Outlook} teams={item.Teams}  />
                                </Link>
                            )
                                
                            
                            
                            
                        })
                    }
                    
                    
                </div>
                
            }
            
        </div>
        
    )
}



