import * as React from 'react';
import '../../styles/pages/AboutUs.module.scss';
import CardsSection from '../../components/aboutUs/cardsSection';
import HeaderSection from '../../components/aboutUs/headerSection';
import '../../styles/App.scss';
import { AboutUsService } from '../../services/aboutUs.service';
import { FormattedMessage } from 'react-intl';
import Navbar from '../../components/global/navbar/Navbar';

export const AboutUs = ({ dataProp }) => {

  const [showResponsiveText, setShowResponsiveText] = React.useState(false);
  const [aboutUsItem, setAboutUsItem] = React.useState([]);
  const aboutUsService = new AboutUsService(dataProp.siteUrl);

  React.useEffect(() => {
    aboutUsService.getMembersTeam().then((data) => {
      
      const dataMembers = data.data.value;
      console.log('DATA =====>')
      console.log(dataMembers)
      setAboutUsItem(dataMembers);
    });
  }, []);

  const openInfo = () => {
    setShowResponsiveText(true);
  };
  const closeInfo = () => {
    setShowResponsiveText(false);
  };

  return (
    <>
      <Navbar namePath={'about-us'} />
      <HeaderSection />
      <div className='container-fluid containerTextInitialPage'>
        <p style={showResponsiveText ? { WebkitLineClamp: 'revert' } : null}>
          <b>
            <FormattedMessage id={'aboutUs.description.regular'} />
          </b>
          <FormattedMessage id={'aboutUs.description.bold'} />
        </p>
        {
          showResponsiveText ?
            <div onClick={closeInfo} className="buttonReadLess">
              -
            </div>
            :
            <div onClick={openInfo} className="buttonReadMore">
              +
            </div>
        }
      </div>
      <CardsSection aboutUsItem={aboutUsItem} />
    </>
  );
};
