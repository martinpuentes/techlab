import './gallery.css'
import React from "react";
import { imagesAssets } from "../../mocks/ImagesAssets";

export const Gallery = () => {
    return(
        <div className='general-gallery-container'>
            <div className='first-image-container'>
                <img className='first-gallery-image' src={imagesAssets(`./fondobanner1.svg`)}/>
            </div>
            <div className='second-section-container'>
                <div className='first-container-second'>
                    <img className='first-container-second-img' src={imagesAssets(`./fondobanner1.svg`)}/>
                </div>
                <div className='second-container-second'>
                    <div className='first-second-container-second'>
                        <img className='first-second-container-second-img' src={imagesAssets(`./fondobanner1.svg`)}/>
                        <img className='first-second-container-second-img-2' src={imagesAssets(`./fondobanner1.svg`)} />
                    </div>
                    <div className='second-second-container-second'>
                        <img className='second-second-container-second-img' src={imagesAssets(`./fondobanner1.svg`)}/>
                        <img className='second-second-container-second-img-2' src={imagesAssets(`./fondobanner1.svg`)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

