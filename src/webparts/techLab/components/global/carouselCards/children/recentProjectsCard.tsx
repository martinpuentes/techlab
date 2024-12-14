import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { imagesAssets } from '../../../../mocks/ImagesAssets';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';

const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
};

const RecentProjectsCard = ({
    title,
    date,
    image,
    id,
    technologiesList,
    technologyId,
    linkResource,
    typeResource
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
    }, []);

    const loadImages = (image1) => {
        image1.src = image1.dataset.src;
    };

    return (
        <Card className='card cardLeft'>
            <CardActionArea>
                <img
                    src={""}
                    data-src={image ? image.Url : imagesAssets(`./Recurso_3.png`)}
                    className={`imageCard ${loaded ? 'loaded' : 'loading'}`}
                    onLoad={() => setLoaded(true)}
                />
                <CardContent className='contentSection'>
                    <Typography variant="body2" color="textSecondary" component="p" style={!date ? { height: '20.01px' } : { height: 'auto' }}>
                        {date ? moment(date).format('MMMM YYYY') : null}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        <b>{title ? title : 'Tecnologias digitales para la salud'}</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='cardAction'>
                <Typography variant="body2" color="textSecondary" component="p" className='textAction'>
                    {technologyId.length > 0 ? 'Technology ' : null}
                    <b>
                        {
                            technologyId?.length > 0 ?
                                technologyId.map((item, i) => {
                                    return (
                                        technologyId.length > 1 && i + 1 < technologyId.length ?
                                            <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Title}</Link>
                                            :
                                            <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Title}</Link>
                                    );
                                }).reduce((prev, curr) => [prev, ' / ', curr])
                                :
                                null
                        }
                    </b>
                </Typography>
                {
                    id ?
                        <Link to={`/our-work/${id}`}>
                            <Button size="small" className='buttonAction'>
                                <FormattedMessage id={'banner.global.buttom'} />
                            </Button>
                        </Link>
                        :
                        linkResource ?
                            <a href={linkResource} target="_blank" rel="noopener noreferrer">
                                <Button size="small" className='buttonAction'>
                                    {
                                        typeResource === 'Report' ?
                                            <FormattedMessage id={'button.read'} />
                                            :
                                            typeResource === 'Video' ?
                                                <FormattedMessage id={'button.video'} />
                                                :
                                                <FormattedMessage id={'button.open'} />
                                    }
                                </Button>
                            </a>
                            :
                            <div style={{ width: '118px', height: '55px' }}>

                            </div>
                }
            </CardActions>
        </Card>
    );
};

export default RecentProjectsCard;
