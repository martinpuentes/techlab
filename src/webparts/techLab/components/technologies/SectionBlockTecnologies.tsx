import * as React from 'react';
import '../../styles/App.scss';
import { imagesAssets } from '../../mocks/ImagesAssets';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const SectionBlockTecnologies = ({
  item,
  technologiesList,
  industriesList
}) => {

  return (
    <>
      <div className="sectionBlockContainer">
        <h1 className='openBold resourcesTitle'>
          <FormattedMessage id={'detailTechnologie.title.3'} />
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
                        <Typography variant="body2" color="textSecondary" component="p" className='date' style={!element.AddedDate ? { height: '17.15px' } : { height: 'auto' }}>
                          {
                            element.AddedDate ?
                              moment(element.AddedDate).format('MMMM YYYY').toUpperCase()
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
                          {
                            item.DisplayIndustries !== null && item.DisplayIndustries ?
                              <>
                                Industry:
                                <b>
                                  {
                                    element.IndustriesId?.map((itemId, index) => {
                                      return (
                                        industriesList[industriesList.findIndex(x => x.Id == itemId)]?.Title
                                      );
                                    }).reduce((prev, curr) => [prev, ' / ', curr])
                                  }
                                </b>
                              </>
                              :
                              <>
                                Technology: <b>
                                  {
                                    element.TechnologyId.length > 0 ?
                                      element.TechnologyId.map((element1) => {
                                        return (
                                          technologiesList[technologiesList.findIndex(x => x.Id == element1)]?.Title
                                        );
                                      }).reduce((prev, curr) => [prev, ' / ', curr])
                                      :
                                      null
                                  }
                                </b>
                              </>
                          }
                          <br />
                          Type <span className='openBold'> {element.ResourceType} </span>
                        </Typography>
                        <Button size="small" className='buttonAction'>
                          {
                            element.ResourceType === 'Report' ?
                              <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.read'} /></a>
                              :
                              element.ResourceType === 'Video' ?
                                <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.video'} /></a>
                                :
                                <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.open'} /></a>
                          }
                        </Button>
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
                        <p style={!element.AddedDate ? { height: '18px' } : { height: 'auto' }}>{element.AddedDate ? moment(element.AddedDate).format('MMMM YYYY').toUpperCase() : null}</p>
                      </div>
                      <div className="title">
                        <p>{element.Title}</p>
                      </div>
                      <div className="technology">
                        <p>
                          {
                            item.DisplayIndustries !== null && item.DisplayIndustries ?
                              <>
                                Industry:
                                <b>
                                  {
                                    element.IndustriesId?.map((itemId, index) => {
                                      return (
                                        industriesList[industriesList.findIndex(x => x.Id == itemId)]?.Title
                                      );
                                    }).reduce((prev, curr) => [prev, ' / ', curr])
                                  }
                                </b>
                              </>
                              :
                              <>
                                Technology: <b>
                                  {
                                    element.TechnologyId.length > 0 ?
                                      element.TechnologyId.map((element1) => {
                                        return (
                                          technologiesList[technologiesList.findIndex(x => x.Id == element1)]?.Title
                                        );
                                      }).reduce((prev, curr) => [prev, ' / ', curr])
                                      :
                                      null
                                  }
                                </b>
                              </>
                          }
                          <br />
                          Type <span className='openBold'> {element.ResourceType} </span>
                        </p>
                        <button>
                          {
                            element.ResourceType === 'Report' ?
                              <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.read'} /></a>
                              :
                              element.ResourceType === 'Video' ?
                                <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.video'} /></a>
                                :
                                <a href={element.Url?.Url} target="_blank" rel="noopener noreferrer"><FormattedMessage id={'button.open'} /></a>
                          }
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
    </>
  );
};
