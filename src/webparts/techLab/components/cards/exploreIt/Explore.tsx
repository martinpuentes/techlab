import * as React from "react";
import { imagesAssets } from "../../../mocks/ImagesAssets";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [show, setShow] = React.useState(false);
  const openInfo = () => {
    setShow(true);
  };
  const closeInfo = () => {
    setShow(false);
  };
  return (
    <div id="explore" className="position-relative">
      <Link to="/services">
      <div className="explore_img">
        <img src={imagesAssets(`./Exploration1.jpg`)} alt="" />
      </div>
      <div className="explore_cont">
      <img className="imgCardMain1" src={imagesAssets('./LogoExplore.png')} alt="" />
      <p>
        <FormattedMessage id={'home.cards.title.explore'}/>
      </p>
      </div>
      </Link>
    </div>
  );
};
export default Explore;

