import * as React from "react";
import { imagesAssets } from "../../../mocks/ImagesAssets";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Share = () => {
  const [show, setShow] = React.useState(false);
  const openInfo = () => {
    setShow(!show);
  };
  const closeInfo = () => {
    setShow(false);
  };
  return (
    <div id="share" className="position-relative">
      <Link to="/services">
        <div className="share_img">
          <img src={imagesAssets(`./Awareness1.jpg`)} alt="" />
        </div>
        <div className="share_cont">
          <img className="imgCardMain3" src={imagesAssets('./LogoShare.png')} alt="" />
          <p>
            <FormattedMessage id={'home.cards.title.share'} />
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Share;