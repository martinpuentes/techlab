import * as React from 'react';
import '../../styles/App.scss';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const SectionInfoTechnologies = ({
    tecnologyitem,
    techIDBItem,
    technologiesList
}) => {
    return (
        <>
            <div className="containerMainItem">
                <div className="containerItem1">
                    <h1 className='openBold'>
                        {tecnologyitem?.Title}
                    </h1>
                    <p>
                        {tecnologyitem.Description}
                    </p>
                    {
                        tecnologyitem.ReportUrl ?
                            <div className="contentButtonTechnologies">
                                <a href={tecnologyitem.ReportUrl.Url} target="_blank">
                                    <button>
                                        <FormattedMessage id={'button.download'} />
                                    </button>
                                </a>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </>
    );
};
