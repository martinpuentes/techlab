import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { imagesAssets } from '../../mocks/ImagesAssets';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';

const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
};

const SectionCardsFilter = ({
    bgColor,
    technologiesList,
    item
}) => {

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

    const loadImages = (image) => {
        image.src = image.dataset.src;
    };

    return (
        <>
            <Card className='card cardSectionFilter destkopOurwork'>
                <CardActionArea>
                    <img
                        src={""}
                        data-src={item.Thumbnail ? item.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)}
                        className={`imageCard ${loaded ? 'show' : null}`}
                        onLoad={() => setLoaded(true)}
                    />
                    <CardContent className='contentSection'>
                        <Typography variant="body2" color="textSecondary" component="p" className='date' style={!item.CompletedDate ? { height: '17.15px' } : { height: 'auto' }}>
                            {item.CompletedDate ? moment(item.CompletedDate).format('MMMM YYYY').toUpperCase() : null}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>{item.Title}</b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='cardAction'>
                    <Typography variant="body2" color="textSecondary" component="p" className='textAction' style={(item.TechnologyId.length > 0) ? { height: 'auto' } : null}>
                        {item.TechnologyId.length > 0 ? 'Technology ' : null}
                        <b>
                            {
                                item.TechnologyId.length > 0 ?
                                    item.TechnologyId.map((element, i) => {
                                        return (
                                            <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Title}</Link>
                                        );
                                    }).reduce((prev, curr) => [prev, ' / ', curr])
                                    :
                                    null
                            }
                        </b>
                    </Typography>
                    <Link to={`/our-work/${item.Slug}`}>
                        <Button size="small" className='buttonAction'>
                            <FormattedMessage id={'ourwork.cards.buttom'} />
                        </Button>
                    </Link>
                </CardActions>
                <div className='textSectionCard' id={bgColor}>
                    <p>
                        {
                            item.Description ?
                                item.Description
                                :
                                'It is critical for the IDB to continuously monitor and assess technological trends that could have a significant impact on the region and its operations. TechLab will create a tech observatory to identify and evaluate technologies and its uses cases that'
                        }
                    </p>
                </div>
            </Card>

            {/* Mobile */}
            <div className="container  cardMobile">

                <div className="cardImg">
                    <img
                        src={""}
                        alt={item.Thumbnail ? item.Thumbnail.Description : 'Tecnologias'}
                        data-src={item.Thumbnail ? item.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)}
                        className={`imageCard ${loaded ? 'show' : null}`}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
                <div className="cardContent" id={bgColor}>
                    <div className="date">
                        <p style={!item.CompletedDate ? { height: '18px' } : { height: 'auto' }}>{item.CompletedDate ? moment(item.CompletedDate).format('MMMM YYYY').toUpperCase() : null}</p>
                    </div>
                    <div className="title">
                        <p>{item.Title}</p>
                    </div>
                    <div className="technology">
                        <p>
                            {item.TechnologyId.length > 0 ? 'Technology ' : null}
                            <b className='subText' >
                                {
                                    item.TechnologyId.length > 0 ?
                                        item.TechnologyId.map((element, i) => {
                                            return (
                                                <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == element)]?.Title}</Link>
                                            );
                                        }).reduce((prev, curr) => [prev, ' / ', curr])
                                        :
                                        null
                                }
                            </b>
                        </p>
                        <Link to={`/our-work/${item.Slug}`}>
                            <button><FormattedMessage id={'ourwork.cards.buttom'} /></button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SectionCardsFilter;