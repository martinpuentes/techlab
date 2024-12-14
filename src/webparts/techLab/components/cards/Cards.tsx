import * as React from "react";
import Experiement from "./experimentIt/Experiement";
import Explore from "./exploreIt/Explore";
import Share from "./shareIt/Share";
import { FormattedMessage } from 'react-intl';
export const Cards = () => {

  return (
    <div id="cards">
      <div className="section">
        <p className="section-text text-align-center">
          <FormattedMessage id={'home.description'} />
        </p>
      </div>      
      <div className="section">
        <h3 className="text-align-center">
          <FormattedMessage id={'home.emergingHeader'}></FormattedMessage>
        </h3>
        <p className="section-text text-align-center">
          <FormattedMessage id={'home.emergingText'}></FormattedMessage>
        </p>
      </div>
      <div className="section">
        <h3><FormattedMessage id={'home.servicesHeader'}></FormattedMessage></h3>
      </div>
      <div className="cards">      
        <Explore />
        <Experiement />
        <Share />
      </div>
    </div>
  );

};
