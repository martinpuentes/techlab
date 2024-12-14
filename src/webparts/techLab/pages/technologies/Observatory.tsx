import React from "react";
import { ObservatoryRedirect } from "../../components/global/observatoryRedirect/ObservatoryRedirect";
import { NavBarObservatory } from "../../components/global/navbar/navBarObservatory";
import Navbar from "../../components/global/navbar/Navbar";
import "../../styles/App.scss";
import { imagesAssets } from "../../mocks/ImagesAssets";
import { FormattedMessage } from "react-intl";

export const TechnologiesHome = ({ dataProp }) => {
  return (
    <>
      <Navbar namePath={"observatory"} />
      {/* <NavBarObservatory typePage={'technologies'} /> */}

      <div className="observatory-image">
        <img
          src={imagesAssets(`./bannerObservatory2.png`)}
          alt="observatory image"
          className="observatory-image-desktop"
        ></img>
        <img
          src={imagesAssets(`./bannerObservatory2.png`)}
          alt="observatory image"
          className="observatory-image-mobile"
        ></img>

        {/* <h2>
                        <i><FormattedMessage id={'observatory.bottom'}></FormattedMessage></i>
                    </h2> */}
      </div>
      <ObservatoryRedirect
        typeBg={true}
        showItem={TextTrackCue}
        typeTextPage="technologiesHome"
      />

      {/* <div id='containerFrame'>
                <iframe title="Radar test Technologias"
                    className='responsiveIframe'
                    src="https://app.powerbi.com/view?r=eyJrIjoiNmRmMGYxOTItNWE5Yy00OGE0LWFmNjEtMDI0N2VmYWY1ZjhkIiwidCI6IjlhOTM3M2YzLWI4ODktNDI3ZS05NjFmLTBlYjY3N2IxMzQzYyJ9&pageName=ReportSection575b1589a6e82145168a"
                    allowFullScreen={true}>
                </iframe>
            </div> */}
    </>
  );
};
