import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { imagesAssets } from '../../mocks/ImagesAssets';
import '../../styles/App.scss';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { CarouselCards } from '../global/carouselCards/carouselCards';
import { TechUseCasesService } from '../../services/techUseCases.service';

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const SectionCardsTechnologies = ({
  techUseCasesItem,
  dataProp,
  technologieItem,
  technologiesList
}) => {

  const [casesRecentItem, setCasesRecentItem] = React.useState([]);

  const techUseCasesService = new TechUseCasesService(dataProp.siteUrl);

  React.useEffect(() => {
    techUseCasesService.getTechUseCasesSortedByDate(technologieItem.Id).then((data) => {
      const dataRecents = data.data.value;
      setCasesRecentItem(dataRecents);
    });
  }, []);

  return (
    <div className='sectionCases'>
      <h1 className='openBold casesTitle'>
        <FormattedMessage id={'detailTechnologie.title.2'} />
      </h1>
      <CarouselCards ourWorkItem={techUseCasesItem} recentItem={casesRecentItem} technologiesList={technologiesList} type={"detailTechnology"} />
      {/* <div className="containerCardsTecnologiesCases" style={{ display: 'none' }}>
        {
          techUseCasesItem.map((item, i) => {
            return (
              <>
                <Card className='card cardSection destkopOurwork'>
                  <CardMedia
                    className='imageCard'
                    image={item.Thumbnail ? item.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)}
                    title={item.Thumbnail ? item.Thumbnail.Description : 'Tecnologias'}
                  >
                    <CardContent className='contentSection'>
                      <Typography variant="body2" color="textSecondary" component="p" className='date' style={!item.Date ? { height: '17.15px' } : { height: 'auto' }}>
                        {item.Date ? moment(item.Date).format('MMMM YYYY').toUpperCase() : null}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        <b>{item.Title}</b>
                      </Typography>
                    </CardContent>

                    <CardActions className='cardAction'>

                      <Button size="small" className='buttonAction'>
                        <a href={item.Url.Url} target="_blank" rel="noopener noreferrer">
                          <FormattedMessage id={'button.open'} />
                        </a>
                      </Button>
                    </CardActions>
                  </CardMedia>
                </Card>

                <div className="container  cardMobile">

                  <div className="cardImg">
                    <img src={item.Thumbnail ? item.Thumbnail.Url : imagesAssets(`./Recurso_3.png`)} alt={item.Thumbnail ? item.Thumbnail.Description : 'Tecnologias'} />
                  </div>
                  <div className="cardContent" id={alternatingBgColor[i % alternatingBgColor.length]}>
                    <div className="date">
                      <p style={!item.Date ? { height: '18px' } : { height: 'auto' }}>{item.Date ? moment(item.Date).format('MMMM YYYY').toUpperCase() : null}</p>
                    </div>
                    <div className="title">
                      <p>{item.Title}</p>
                    </div>
                    <div className="technology">
                      <p></p>
                      <b className='subText' ></b>
                      <button>
                        <a href={item.Url.Url} target="_blank" rel="noopener noreferrer">
                          <FormattedMessage id={'button.open'} />
                        </a>
                      </button>
                    </div>
                  </div>

                </div>
              </>
            );
          })
        }
      </div> */}
    </div>
  );
};
