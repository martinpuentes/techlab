import * as React from "react";
import { imagesAssets } from "../../../mocks/ImagesAssets";
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Experiement = () => {
  const [show, setShow] = React.useState(false);
  const openInfo = () => {
    setShow(!show);
  };
  const closeInfo = () => {
    setShow(false);
  };
  return (
    <div id="experiment" className="position-relative">
      <Link to="/services">
      <div className="experiment_img">
        <img src={imagesAssets(`./Experimentation1.png`)} alt="" />
      </div>
      <div className="experiment_cont">
        <img className="imgCardMain2" src={imagesAssets('./LogoExperiment.png')} alt="" />
        <p>
          <FormattedMessage id={'home.cards.title.experiment'} />
        </p>
      </div>
      </Link>
    </div>
  );

};
export default Experiement;
