import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { imagesAssets } from "../../mocks/ImagesAssets";

export const SectionCards = ({ urlImg }) => {
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const openInfo1 = () => {
        setShow1(true);
    };
    const closeInfo1 = () => {
        setShow1(false);
    };
    const openInfo2 = () => {
        setShow2(true);
    };
    const closeInfo2 = () => {
        setShow2(false);
    };
    const openInfo3 = () => {
        setShow3(true);
    };
    const closeInfo3 = () => {
        setShow3(false);
    };


    const defaultMessage = "... {br}<ul><li>.</li><li>.</li><li>.</li></ul>";

    const formatValues = {
        'br': <br/>,
        'ul': chunk=> <ul>{chunk}</ul>,
        'li': chunk=> <li>{chunk}</li>
    }

    return (
        <div className="cardsBodyService">
            <div className="desktop">
                <div className="row">
                    <div className="col-12 col-lg-4  d-flex justify-content-end align-items-center boxResources1">
                        <img src={urlImg[0]} alt="" />
                    </div>
                    <div className="card1 col-md-12 col-lg-8" id='containerItemService'>
                        <p className='titleMainCard'>
                            <FormattedMessage id={'services.card.explore'}  
                                defaultMessage={defaultMessage}
                                values={ formatValues }/>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4  d-flex justify-content-end align-items-center boxResources2">
                        <img src={urlImg[1]} alt="" />
                    </div>
                    <div className="card2 col-md-12 col-lg-8" id='containerItemService'>
                        <p className='titleMainCard'>
                            <FormattedMessage id={'services.card.experiment'} 
                            defaultMessage={defaultMessage}
                            values={ formatValues }/>                        
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4  d-flex justify-content-end align-items-center boxResources3">
                        <img src={urlImg[2]} alt="" />
                    </div>
                    <div className="card3 col-md-12 col-lg-8" id='containerItemService'>
                        <p className='titleMainCard'>
                            <FormattedMessage id={'services.card.share'} 
                            defaultMessage={defaultMessage}
                            values={ formatValues }/> 
                        </p>
                    </div>
                </div>
            </div>


            <div className="mobile">
                <div id="exploreServices" className='m-0'>
                    <div className="explore_cont">
                        <img className="imgCardMain1" src={imagesAssets('./LogoExplore.png')} alt="" />
                        <p>EXPLORATION: PREPARATION FOR THE USE OF TECHNOLOGIES</p>
                    </div>
                    {
                        show1 ?
                            null
                            :
                            <div onClick={openInfo1} className="explore_body">
                                +
                            </div>
                    }
                    {
                        show1 ?
                            <div className="explore_description">
                                <p>

                                    <FormattedMessage id={'services.card.explore'} />

                                </p>
                                <div onClick={closeInfo1} className="hidden_descriptionServices position-absolute">
                                    -
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div id="experimentServices" className='m-0'>
                    <div className="experiment_cont">
                        <img className="imgCardMain2" src={imagesAssets('./LogoExperiment.png')} alt="" />
                        <p>EXPERIMENTATION: DEVELOPMENT OF PoCs</p>
                    </div>
                    {
                        show2 ?
                            null
                            :
                            <div onClick={openInfo2} className="experiment_body">
                                +
                            </div>
                    }
                    {
                        show2 ?
                            <div className="experiment_description">
                                <p>

                                    <FormattedMessage id={'services.card.experiment'} />

                                </p>
                                <div onClick={closeInfo2} className="hidden_descriptionServices position-absolute">
                                    -
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div id="shareServices" className='m-0'>
                    <div className="share_cont">
                        <img className="imgCardMain3" src={imagesAssets('./LogoShare.png')} alt="" />
                        <p>TECH AWARENESS: PARTNERSHIPS & ECOSYSTEM</p>
                    </div>
                    {
                        show3 ?
                            null
                            :
                            <div onClick={openInfo3} className="share_body">
                                +
                            </div>
                    }
                    {
                        show3 ?
                            <div className="share_description">
                                <p>
                                    <FormattedMessage id={'services.card.share'} />

                                </p>
                                <div onClick={closeInfo3} className="hidden_descriptionServices position-absolute">
                                    -
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};
