import * as React from 'react';
import * as moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const HeaderSection = ({ urlImage, detailProject, technologiesList }) => {

    const ref = React.useRef(null);

    const [dateConvert, setDateConvert] = React.useState('');
    const [texAlign, setTextAlign] = React.useState(false);

    const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidthScreen(window.screen.width);
        window.addEventListener("resize", handleResize);
    }, [widthScreen]);

    React.useEffect(() => {
        if (detailProject.CompletedDate) {
            convertDate(detailProject.CompletedDate);
        }
        ref.current.clientHeight > 51 ? setTextAlign(false) : setTextAlign(true);
    }, [detailProject.CompletedDate]);

    const convertDate = (dateInput) => {
        const newDate = moment(dateInput).format('MMMM YYYY').toUpperCase();
        setDateConvert(newDate);
    };

    return (
        <>
            <div className='container-fluid headerTexts'>
                <div className='categoriesContainer'>
                    <div className='categoiresImages'>
                        <img src={urlImage[0]} alt="image" id='img1' style={(detailProject.Track === "Exploration") ? { opacity: '1' } : { opacity: '0.2' }} />
                        <img src={urlImage[1]} alt="image" id='img2' style={(detailProject.Track === "Experimentation") ? { opacity: '1' } : { opacity: '0.2' }} />
                        <img src={urlImage[2]} alt="image" id='img3' style={(detailProject.Track === "Awareness") ? { opacity: '1' } : { opacity: '0.2' }} />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className='headerTextsResponsive'>
                <div className='containerImagesResponsive' hidden={widthScreen < 570 && detailProject.Track !== 'Exploration' ? true : false}>
                    <img src={urlImage[0]} alt="image" id='img1' style={(detailProject.Track === "Exploration") ? { opacity: '1' } : { opacity: '0.2' }} />
                </div>
                <div className='containerImagesResponsive' id='containerCenter' hidden={widthScreen < 570 && detailProject.Track !== 'Experimentation' ? true : false} style={widthScreen < 570 && detailProject.Track !== 'Exploration' ? { border: 'none' } : null}>
                    <img src={urlImage[1]} alt="image" id='img2' style={(detailProject.Track === "Experimentation") ? { opacity: '1' } : { opacity: '0.2' }} />
                </div>
                <div className='containerImagesResponsive' hidden={widthScreen < 570 && detailProject.Track !== 'Awareness' ? true : false}>
                    <img src={urlImage[2]} alt="image" id='img3' style={(detailProject.Track === "Awareness") ? { opacity: '1' } : { opacity: '0.2' }} />
                </div>
            </div>

            <div className="row contentCard">
                <div className="col-md-6 p-0 h-100 imageSection">
                    <img className="w-100 h-100" src={detailProject.Thumbnail ? detailProject.Thumbnail.Url : urlImage[3]} alt="Imagen" />
                </div>
                <div className="col-md-6  position-relative descriptionSection">
                    <div className='textsContainer'>
                        <div className="dateCard">
                            <p style={!detailProject.CompletedDate ? { height: '27px' } : { height: 'auto' }}>{detailProject.CompletedDate ? dateConvert : null}</p>
                        </div>
                        <div className="titleCard">
                            <h1>{detailProject.Title}</h1>
                        </div>
                        <div className="descriCard" style={texAlign ? { alignItems: 'center' } : { alignItems: 'start' }}>
                            <p ref={ref}>
                                {
                                    detailProject.Description ?
                                        detailProject.Description
                                        :
                                        "LACChain, la blockchain para el desarrollo y la inclusión."
                                }
                            </p>
                        </div>
                        <div className="tagCard">
                            <p style={!(detailProject.TechnologyId?.length > 0) ? { height: '30px' } : null}>
                                {detailProject.TechnologyId?.length > 0 ? 'Technology ' : null}
                                <span className="subText">
                                    {
                                        detailProject.TechnologyId?.length > 0 ?
                                            detailProject.TechnologyId.map((item, i) => {
                                                return (
                                                    detailProject.TechnologyId.length > 1 && i + 1 < detailProject.TechnologyId.length ?
                                                        <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Title}</Link>
                                                        :
                                                        <Link to={`/observatory/technologies/${technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Slug}`}>{technologiesList[technologiesList.findIndex(x => x.Id == item)]?.Title}</Link>
                                                );
                                            }).reduce((prev, curr) => [prev, ' / ', curr])
                                            :
                                            null
                                    }
                                </span>
                            </p>
                        </div>
                    </div>
                    <button className="contentButtonDownload" onClick={() => window.print()}><FormattedMessage id={'ourwork.download'} /></button>
                </div>
            </div>
        </>
    );
};
