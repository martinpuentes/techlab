import './innerBanner.css'
import React from "react";

export const InnerBanner = ({imagenFondo ,nombre, openModal}) =>{
    const bannerStyle = {
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '20rem',
        width: '80%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' as React.CSSProperties['flexDirection']
      };
    
    const titleStyle = {
        textAlign: 'center' as React.CSSProperties['textAlign'],
        width: '80%',
        color: '#FFFFFF'
    }

    return(
        <div className='banner-container' style={bannerStyle}>
            <h1 className='banner-title' style={titleStyle}>{nombre}</h1>
        
            <button onClick={openModal} className='visit-button'>Coordina tu visita</button>
        </div>
    )
}

