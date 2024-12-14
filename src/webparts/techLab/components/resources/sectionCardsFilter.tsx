import * as React from 'react';
import * as moment from 'moment';
import { imagesAssets } from '../../mocks/ImagesAssets';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
};

const SectionCardsFilter = ({ bgColor, technologiesList, item }) => {

    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        let observer = new window.IntersectionObserver((entries, self) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);
        const imgs = document.querySelectorAll('[data-src]');
        imgs.forEach(img => {
            observer.observe(img);
        });

        return () => {
            imgs.forEach(img => {
                observer.unobserve(img);
            });
        };
    }, [item]);

    const loadImages = (image1) => {
        image1.src = image1.dataset.src;
    };

    return (
        <div className="contentItemsReources">

            <div className="container  sectionCardResources">

                <div className="cardImgResources">
                    <img
                        src={""}
                        className={`w-100 h-100 imageCard ${loaded ? 'show' : null}`}
                        data-src={item.Thumbnail ? item.Thumbnail.Url : imagesAssets(`./card1Reousrces.png`)}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
                <div className="cardContentResources" id={bgColor}>
                    <div className="dateResources">
                        <p style={!item.AddedDate ? { height: '18px' } : { height: 'auto' }}>{item.AddedDate ? moment(item.AddedDate).format('MMMM YYYY').toUpperCase() : null}</p>
                    </div>
                    <div className="titleResources">
                        <h2><b>{item.Title}</b></h2>
                    </div>
                    <div className="descriResources">
                        <p className='marginItemLefResources'>{item.Description}</p>
                    </div>
                    <div className="technologyResources">
                        <p>
                            {item.TechnologyId.length > 0 ? 'Technology ' : null}
                            <b className='subText openBold'>
                                {
                                    item.TechnologyId?.length > 0 ?
                                        item.TechnologyId?.map((element, i) => {
                                            return (
                                                <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Title}</Link>
                                            );
                                        }).reduce((prev, curr) => [prev, ' / ', curr])
                                        :
                                        null
                                }
                            </b>

                        </p>
                    </div>
                    <div className="typeResources">
                        <p>Type <b className='openBold'> {item.ResourceType}</b></p>
                    </div>
                    {/* Inicio boton Mobile */}
                    <div className='contentButtonMobile'>
                        <button className="buttonMobile ">
                            {
                                item.ResourceType === 'Report' ?
                                    <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.read'} /></a>
                                    :
                                    item.ResourceType === 'Video' ?
                                        <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.video'} /></a>
                                        :
                                        <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.open'} /></a>
                            }
                        </button>
                    </div>
                    {/* Fin boton Mobile */}

                    <button className="contentButton position-absolute">
                        {
                            item.ResourceType === 'Report' ?
                                <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.read'} /></a>
                                :
                                item.ResourceType === 'Video' ?
                                    <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.video'} /></a>
                                    :
                                    <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.open'} /></a>
                        }
                    </button>


                </div>


            </div>
        </div>
    );
};

export default SectionCardsFilter;
