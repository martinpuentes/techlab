import * as  React from 'react';
import { imagesAssets } from "../../mocks/ImagesAssets";
import { FormattedMessage } from 'react-intl';

export const SectionBanner = () => {
    return (
        <>
            <div className="sectionBanerServices d-flex cardServicesDestkop">
                <div className="col-md-12 col-lg-5 content1Service1">
                    <div className="sectionTextMainServices">
                        <div className="titleMainServices">
                            <h1 className='openBold'>
                                <FormattedMessage id={'services.banner.title'} />
                            </h1>
                        </div>
                        <div className="desMainServices">
                            <p>
                                <FormattedMessage id={'services.banner.descri'} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-7 content1Service12">
                    <img className='w-100' src={imagesAssets(`./skye-studios.jpg`)} alt="image" />
                </div>
            </div>


            {/* Mobile */}
            <div className="sectionBanerMobile">
                <div className="tituloMobile">
                    <h1 className='openBold'>
                        <FormattedMessage id={'services.banner.title'} />
                    </h1>
                </div>
                <div className="imgMobile">
                    <img className='w-100' src={imagesAssets(`./skye-studios.jpg`)} alt="image" />
                </div>
                <div className="descriptionMobile">
                    <p>
                        <FormattedMessage id={'services.banner.descri'} />
                    </p>
                </div>
            </div>
        </>
    );
};
