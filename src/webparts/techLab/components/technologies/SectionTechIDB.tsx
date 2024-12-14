import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import '../../styles/App.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const SectionTechIDB = ({ techIDBItem }) => {
    return (
        <div className='containerMainItem'>
            <div className="containerItem2">
                <h1 className='openBold titleMain'>
                    <FormattedMessage id={'detailTechnologie.title.1'} />
                </h1>
            </div>
            <div className="containerOptionItems">
                {
                    techIDBItem?.map((item, i) => {
                        return (
                            <>
                                <Card className='card'>
                                    <CardContent className='contentSection'>
                                        <Typography variant="body2" color="textSecondary" component="p" className='date' style={!item.Date ? { height: '17.15px' } : { height: 'auto' }}>
                                            {item.Date ? moment(item.Date).format('MMMM YYYY').toUpperCase() : null}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <b>{item.Title}</b>
                                        </Typography>
                                    </CardContent>

                                    <CardActions className='cardAction'>
                                        <Typography variant="body2" color="textSecondary" component="p" className='textAction' style={(item.TechnologyId.length > 0) ? { height: 'auto' } : null}>
                                            {item.Contact !== null ? 'Contact ' : null}
                                            <b>
                                                {
                                                    item.Contact !== null ?
                                                        item.Contact
                                                        :
                                                        null
                                                }
                                            </b>
                                        </Typography>
                                        <Button size="small" className='buttonAction' disabled={true}>
                                            <a href={""} target="_blank" rel="noopener noreferrer">
                                                <FormattedMessage id={'button.open'} />
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <div className='textSectionCard' id={alternatingBgColor[i % alternatingBgColor.length]}>
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
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
};
