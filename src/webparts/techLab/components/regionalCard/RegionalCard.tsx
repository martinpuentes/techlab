import React from "react";
import './regionalCard.css';
import { imagesAssets } from "../../mocks/ImagesAssets";

export const RegionalCard = ({nombre, image, teams, outlook}) => {

    const handleRedirectTeams = () => {
        window.location.href = teams;
      };

      const handleRedirectOutlook = () => {
        window.location.href = outlook;
      };


    return(
        <div className='card-container'>
            <img className='card-img' src={image} />
            <p  className='techlab-name'>{nombre} </p>
            
            <div className='icons-container'>
                <img onClick={handleRedirectOutlook} className='regional-logo' src={imagesAssets(`./outlook-svgrepo-com.svg`)}/>
                <img onClick={handleRedirectTeams} className='regional-logo' src={imagesAssets(`./logos_microsoft-teams.svg`)}/>
            </div>
            
        </div>
    )
}

