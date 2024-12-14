import './pillarSection.css'
import {Pillar} from '../pillar/Pillar';
import React from "react";
import { imagesAssets } from "../../mocks/ImagesAssets";

export const  PillarSection = ({pillars}) => {
     
    const lines = pillars.split('\n');

    return(
        <div className="pillar-general-container">
            {
                lines.map((item, i) => {
                    return(
                     <Pillar  logoPath ={imagesAssets(`./logo1.svg`)} num={i+1} description={item} />
                    )
                     
                 })
                
                
            }
        </div>
        
                                                            
            
        
    
            
            
        
    )

}

