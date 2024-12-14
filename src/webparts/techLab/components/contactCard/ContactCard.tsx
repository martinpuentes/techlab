import'./contactCard.css'
import React from "react";
import { imagesAssets } from "../../mocks/ImagesAssets";

export const ContactCard = ({name, cardDescription, teams, outlook}) => {

    const handleRedirectTeams = () => {
        window.location.href = teams;
      };

      const handleRedirectOutlook = () => {
        window.location.href = outlook;
      };
    return(

        
        

        <div  className='contact-card-container'>
            <img className='image-card-contact'  src={imagesAssets(`./fotocontacto.png`)}/>
            <p className='name'>{name}</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
            <div className='logo-hover-container'>
            <img onClick={handleRedirectOutlook} className='logo-hover-card' src={imagesAssets(`./outlook-svgrepo-com.svg`)}/>
            <img  onClick={handleRedirectTeams}className='logo-hover-card' src={imagesAssets(`./logos_microsoft-teams.svg`)}/>
            </div>
            
            
            <button className='contact-card-button'>Contact: {name}</button>
        </div>
    )
}


