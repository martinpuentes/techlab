import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const CardsSection = ({ aboutUsItem }) => {

    return (
        <div className='container-fluid containerCards'>
            <div className='containerTitleSection'>
                <p className='titleCardSection'>
                    <FormattedMessage id={'aboutUs.container.teams.title.regular'} />
                </p>
                <strong>
                    <FormattedMessage id={'aboutUs.container.teams.title.bold'} />
                </strong>
            </div>
            <div className="containerCardsSection">

                {
                    aboutUsItem?.map((item, i) => {

                        return (
                            <div className='containerCardAboutUs'>
                                <div className="card" key={i}>
                                    <div className="flipCard">
                                        <div className="flipCardInner">
                                            <div className="flipCardFront">
                                                <img src={item.Photo1?.Url} className="card-img-top" alt='image' />
                                                <div className="card-body containerCardDescription">
                                                    <p
                                                        className='card-title titleCard'
                                                        style={{
                                                            backgroundColor: item.BackgroundColor,
                                                            color: (item.BackgroundColor == '#CBD8DF') ? '#3c3b3b' : '#ffff'
                                                        }}>
                                                        {item.KnownAs} <br />
                                                        {item.Role}
                                                    </p>
                                                    <p className="card-text cardDescription">
                                                        {item.Description1}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flipCardBack">
                                                <img src={item.Photo2 ? item.Photo2?.Url : item.Photo1?.Url} className="card-img-top" alt='image' />
                                                <div className="card-body containerCardDescription">
                                                    <p
                                                        className="card-title titleCard"
                                                        style={{
                                                            backgroundColor: item.BackgroundColor,
                                                            color: (item.BackgroundColor == '#CBD8DF') ? '#3c3b3b' : '#ffff'
                                                        }}>
                                                        {item.KnownAs} <br />
                                                        {item.Role}
                                                    </p>
                                                    <p className="card-text cardDescription">
                                                        {item.Description2}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

            <br />
            <br />
            <br />

        </div>
    );
};

export default CardsSection;