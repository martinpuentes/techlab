import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';


const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const ResourceCardsSection = ({ urlImage, resourceItem }) => {

    return (
        <div className='container-fluid sectionResourceCards'>

            <p className='titleResources'><b><FormattedMessage id={'detailProject.title.resources'} /></b></p>

            <div className='resourcesCards'>
                {
                    resourceItem?.map((item, i) => {
                        return (
                            <>
                                <div className='containerCardResources'>
                                    <Card className='card cardSection'>
                                        <CardActionArea>
                                            <CardMedia
                                                className='imageCard'
                                                image={item.Thumbnail ? item.Thumbnail.Url : urlImage}
                                                title={item.Thumbnail?.Description ? item.Thumbnail.Description : 'Resource'}
                                            />
                                            <CardContent className='contentSection'>
                                                <Typography variant="body2" color="textSecondary" component="p" style={!item.AddedDate ? { height: '20.01px' } : { height: 'auto' }}>
                                                    {item.AddedDate ? moment(item.AddedDate).format('MMMM YYYY').toUpperCase() : null}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    <b>{item.Title}</b>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions className='cardAction'>
                                            <Typography variant="body2" color="textSecondary" component="p" className='textAction'>
                                                {item.ResourceType}
                                            </Typography>
                                            <Button size="small" className='buttonAction'>
                                                <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer">
                                                    {
                                                        item.ResourceType === 'Report' ?
                                                            <FormattedMessage id={'button.read'} />
                                                            :
                                                            item.ResourceType === 'Video' ?
                                                                <FormattedMessage id={'button.video'} />
                                                                :
                                                                <FormattedMessage id={'button.open'} />
                                                    }
                                                </a>
                                            </Button>
                                        </CardActions>
                                        <div className='textSectionCard' id='bg1'>
                                            <p>
                                                {
                                                    item.Description ?
                                                        item.Description
                                                        :
                                                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
                                                }
                                            </p>
                                        </div>
                                    </Card>
                                </div>

                                {/* Mobile */}
                                <div className="container  cardMobile">

                                    <div className="cardImg">
                                        <img src={item.Thumbnail ? item.Thumbnail.Url : urlImage} alt={item.Thumbnail ? item.Thumbnail.Description : 'Tecnologias'} />
                                    </div>
                                    <div className="cardContent" id={alternatingBgColor[i % alternatingBgColor.length]}>
                                        <div className="date">
                                            <p style={!item.AddedDate ? { height: '18px' } : { height: 'auto' }}>{item.AddedDate ? moment(item.AddedDate).format('MMMM YYYY').toUpperCase() : null}</p>
                                        </div>
                                        <div className="title">
                                            <p>{item.Title}</p>
                                        </div>
                                        <div className="technology">
                                            <p>
                                                {item.ResourceType}
                                            </p>
                                            <button>
                                                <a href={item.Url?.Url} target="_blank" rel="noopener noreferrer">
                                                    {
                                                        item.ResourceType === 'Report' ?
                                                            <FormattedMessage id={'button.read'} />
                                                            :
                                                            item.ResourceType === 'Video' ?
                                                                <FormattedMessage id={'button.video'} />
                                                                :
                                                                <FormattedMessage id={'button.open'} />
                                                    }
                                                </a>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </>

                        );
                    })
                }
            </div>
        </div>
    );
};