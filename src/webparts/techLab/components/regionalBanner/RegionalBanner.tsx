import React from "react";
//import '../../../styles/components/regionalBanner/regionalBanner.module.scss';

import '../../styles/components/regionalBanner/regionalBanner.module.scss';

function Banner({imagenFondo, titulo, texto}){

    const bannerStyle = {
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%',
        display: 'flex',
        alignItems :'center',
        justifyContent: 'center',
        flexDirection: 'column' as React.CSSProperties['flexDirection']
      };

    const titleStyle = {
        fontFamily :'Segoe UI',
        color: '#FFFFFF'
    }  

    const textStyle = {
        fontFamily :'Segoe UI',
        color: '#FFFFFF',
        width: '80%'
    }  
    return(

        <div className='banner-container' style={bannerStyle}>
            <h3 className='banner-title-general' style={titleStyle}>{titulo}</h3>
            <p className='banner-text' style={textStyle}>{texto}</p>
        </div>
    );

}

export default Banner;