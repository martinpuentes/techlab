import * as React from "react";
import Banner from "../../components/home/banner/Banner";
import { Cards } from "../../components/cards/Cards";
import Video from "../../components/home/homeVideo/Video";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.scss';
import Navbar from '../../components/global/navbar/Navbar';
import { FormattedMessage } from 'react-intl';
import { imagesAssets } from "../../mocks/ImagesAssets";
import { Link } from 'react-router-dom';

export const HomeComponent = () => {
  return (
    <>
    <Navbar namePath={'home'} />
    <div id="home">
      <Banner />
      <Cards/>
      {/* <Video /> */}
      <div id="home-sections">
        <div id="section-visit" className="home-cards">
          <div className="home-cards-content">
            <h3>
              <FormattedMessage id={'home.visitHeader'}></FormattedMessage>
            </h3>
            <p>
            <FormattedMessage id={'home.visitText'}></FormattedMessage>
            </p>
            {/* <a href="https://outlook.office365.com/owa/calendar/TechLabDemoRoom@idbg.onmicrosoft.com/bookings/" target="_blank"> */}
            <a href="mailto:techlab@iadb.org" target="_blank">
              <button type="button" className="btn btn-outline-primary btnHome">
                  <FormattedMessage id={'home.button.visit'} />
              </button>
            </a>
          </div>
          <div className="home-cards-media" style={{backgroundImage: `url("${imagesAssets(`./home/visit-img.jpg`)}")`, backgroundSize:'cover'}}/>
        </div>
        <div id="home-ourwork" className="home-cards reverse">
          <div className="home-cards-media" style={{backgroundImage: `url("${imagesAssets(`./home/ourwork-img.jpg`)}")`, backgroundSize:'cover'}}/>
          <div className="home-cards-content">
            <h3>
              <Link to="/our-work"><FormattedMessage id={'home.ourWorkHeader'}></FormattedMessage></Link>
            </h3>
            <p>
              <FormattedMessage id={'home.ourWorkText'}></FormattedMessage>
            </p>
          </div>
        </div>
        <div id="home-observatory" className="home-cards">
          <div className="home-cards-content">
            <h3>
              <Link to="/observatory/technologies"><FormattedMessage id={'home.observatoryHeader'}></FormattedMessage></Link>
            </h3>
            <p>
            <FormattedMessage id={'home.observatoryText'}></FormattedMessage>
            </p>
          </div>
          <div className="home-cards-media" style={{backgroundImage: `url("${imagesAssets(`./home/observatory-img.jpg`)}")`, backgroundSize:'cover'}}/>
        </div>
      </div>
    </div>
    </>
  );

};
