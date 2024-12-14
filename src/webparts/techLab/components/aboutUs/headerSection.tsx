import * as React from 'react';
import { imagesAssets } from "../../mocks/ImagesAssets";
import Carousel from 'react-bootstrap/Carousel';
import { FormattedMessage } from 'react-intl';

const HeaderSection = () => {
  return (
    <>
      <div className='container-fluid containerBanner'>

        <div className='topContainer'>
          <div className='leftContainer'>
            <div className='containerLogo'>
              <img
                src={imagesAssets(`./TechLabLogoSloganBlueAsset.png`)}
                alt="Logo TechLab"
                className="logo"
              />
            </div>

          </div>
          <div className='rightContainer'>
            <p className='paragraph_1'>
              <FormattedMessage id={'aboutUs.title.regular'} />
              <br />
              <b>
                <FormattedMessage id={'aboutUs.title.bold'} />
              </b>
            </p>
          </div>
        </div>

        <div className='lowerContainer'>
          <div className='leftContainer'>
            <div className='containerButton'>
              <a href="mailto:techlab@iadb.org">
                <button type="button" className="btn btn-outline-primary btnContactUs">
                  <FormattedMessage id={'aboutUs.buttom'} />
                </button>
              </a>
            </div>

          </div>
          <div className='rightContainer'>
            <p className='paragraph_2'>
              <b>
                <FormattedMessage id={'aboutUs.subTitle.bold'} />
              </b>
              <FormattedMessage id={'aboutUs.subTitle.regular'} />
            </p>
          </div>
        </div>

        <div className='containerImgBanner'>
          <img src={imagesAssets(`./about_us1.png`)} alt="image" />
          <img src={imagesAssets(`./about_us2.png`)} alt="image" />
          <img src={imagesAssets(`./about_us3.jpg`)} alt="image" />
        </div>

      </div>

      {/* Mobile */}
      <div className='containerHeaderResponsive container-fluid'>
        <div className="headerResponsive w-100">
          <div className='containerImageResponsive'>
            <img src={imagesAssets(`./TechLabLogoSloganBlueAsset.png`)} alt="Logo TechLab" className="logoResponsive" />
          </div>
          <a href="mailto:techlab@iadb.org">
            <button type="button" className="btn btn-outline-primary btnContactUsResponsive">
              <FormattedMessage id={'aboutUs.buttom'} />
            </button>
          </a>
        </div>
      </div>
      <div className='containerBannerResponsive container-fluid'>
        <p className='paragraph1_Responsive'>
          <FormattedMessage id={'aboutUs.title.regular'} />
          <br />
          <b>
            <FormattedMessage id={'aboutUs.title.bold'} />
          </b>
        </p>
        <div>
          <Carousel className='carouselContainerResponsive'>
            <Carousel.Item className='item'><img src={imagesAssets(`./about_us1.png`)} alt="image" className='imageCarousel' /></Carousel.Item>
            <Carousel.Item className='item'><img src={imagesAssets(`./about_us2.png`)} alt="image" className='imageCarousel' /></Carousel.Item>
            <Carousel.Item className='item'><img src={imagesAssets(`./about_us3.jpg`)} alt="image" className='imageCarousel' /></Carousel.Item>
          </Carousel>
        </div>
        <p className='paragraph2_Responsive'>
          <b>
            <FormattedMessage id={'aboutUs.subTitle.bold'} />
          </b>
          <FormattedMessage id={'aboutUs.subTitle.regular'} />
        </p>
      </div>
    </>
  );
};

export default HeaderSection;