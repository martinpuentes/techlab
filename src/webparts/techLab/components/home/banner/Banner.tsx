import * as React from "react";
import { imagesAssets } from "../../../mocks/ImagesAssets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from 'react-intl';
export default class Banner extends React.Component {
  public render() {
    return (
      <div id="banner" className="position-relative">
        {/* <div className="contentItemsHome">
          <img
            src={imagesAssets(`./logoHomeTechlab1.png`)}
            alt="Logo TechLab"
            className="logoHomeTechlab position-absolute"
            width={313}
          />
          <a href="mailto:techlab@iadb.org">
            <button type="button" className="btn btn-outline-light  btnContacHome">
              <FormattedMessage id={'home.banner.button.contactUs'} />
            </button>
          </a>
        </div> */}
        <img
          src={imagesAssets(`./banner.jpg`)}
          alt="Logo bghome"
          className="logo"
        />
        <img
          src={imagesAssets(`./banner2.jpg`)}
          alt="Logo bghome"
          className="logo2"
        />
        {/* <img
          src={imagesAssets(`./TechLabHomePageVR.png`)}
          alt="Logo personaje"
          className="personaje position-absolute"
        /> */}

        {/* <p className="descriTextBannerHome">

          <FormattedMessage id={'home.descBanner'} />
        </p>
        <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" /> */}
      </div>
    );
  }
}
