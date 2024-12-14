import * as React from 'react';
import '../../styles/App.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { imagesAssets } from '../../mocks/ImagesAssets';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const SectionSubCardsTechnologies = ({
  item,
  technologiesList
}) => {
  return (
    <div className='sectionProjectsMain'>
      <h1 className='openBold resourcesTitleProjects'>
        <FormattedMessage id={'detailTechnologie.title.4'} />
      </h1>
      <div className="containerSubCardsTecnologies">
        {
          item?.map((element, i) => {
            return (
              <>
                <Card className='card destkopOurwork'>
                  <CardMedia
                    className='imageCard'
                    image={element.Thumbnail ? element.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)}
                    title={element.Thumbnail ? element.Thumbnail.Description : 'Proyecto'}
                  >
                    <CardContent className='contentSection'>
                      <Typography variant="body2" color="textSecondary" component="p" className='date' style={!element.CompletedDate ? { height: '17.15px' } : { height: 'auto' }}>
                        {
                          element.CompletedDate ?
                            moment(element.CompletedDate).format('MMMM YYYY').toUpperCase()
                            :
                            null
                        }
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        <b>{element.Title}</b>
                      </Typography>
                    </CardContent>
                    <CardActions className='cardAction'>
                      <Typography variant="body2" color="textSecondary" component="p" className='textAction' style={(element.TechnologyId.length > 0) ? { height: 'auto' } : null}>
                        {element.TechnologyId.length > 0 ? 'Technology ' : null}
                        <b>
                          {
                            element.TechnologyId.length > 0 ?
                              element.TechnologyId.map((itemId, index) => {
                                return (
                                  element.TechnologyId.length > 1 && index + 1 < element.TechnologyId.length ?
                                    technologiesList[technologiesList.findIndex(x => x.Id == itemId)]?.Title + ' / '
                                    :
                                    technologiesList[technologiesList.findIndex(x => x.Id == itemId)]?.Title
                                );
                              })
                              :
                              null
                          }
                        </b>
                      </Typography>
                      <Link to={`/our-work/${element.Slug}`}>
                        <Button size="small" className='buttonAction'>
                          <FormattedMessage id={'ourwork.cards.buttom'} />
                        </Button>
                      </Link>
                    </CardActions>
                  </CardMedia>
                </Card>

                {/*Mobile */}
                <div className="container  cardMobile">

                  <div className="cardImgMobile">
                    <img src={element.Thumbnail ? element.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)} alt={element.Thumbnail ? element.Thumbnail.Description : 'Proyecto'} />
                  </div>
                  <div className="cardContent" id={alternatingBgColor[i % alternatingBgColor.length]}>
                    <div className="date">
                      <p style={!element.CompletedDate ? { height: '18px' } : { height: 'auto' }}>{element.CompletedDate ? moment(element.CompletedDate).format('MMMM YYYY').toUpperCase() : null}</p>
                    </div>
                    <div className="title">
                      <p>{element.Title}</p>
                    </div>
                    <div className="technology">
                      <p>
                        {element.TechnologyId.length > 0 ? 'Technology ' : null}
                        <b className='subText' >
                          {
                            element.TechnologyId.length > 0 ?
                              element.TechnologyId.map((itemId, index) => {
                                return (
                                  element.TechnologyId.length > 1 && index + 1 < element.TechnologyId.length ?
                                    technologiesList[technologiesList.findIndex(x => x.Id == itemId)]?.Title + ' / '
                                    :
                                    technologiesList[technologiesList.findIndex(x => x.Id == itemId)]?.Title
                                );
                              })
                              :
                              null
                          }
                        </b>
                      </p>
                      <Link to={`/our-work/${element.Slug}`}>
                        <button><FormattedMessage id={'ourwork.cards.buttom'} /></button>
                      </Link>
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
