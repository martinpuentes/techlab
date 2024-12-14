import * as React from 'react';
import { imagesAssets } from '../../../mocks/ImagesAssets';
import '../../../styles/App.scss';
import { FormattedMessage } from 'react-intl';

export const HeaderContactUs = ({ typeBg, showItem, typeTextPage }) => {

    const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidthScreen(window.screen.width);
        window.addEventListener("resize", handleResize);
    }, [widthScreen]);

    return (
        <div className='container-fluid containerHeader'>
            <div className='sectionLogo' style={
                (widthScreen < 993) ?
                    typeBg ? { backgroundColor: '#cbd8df' } : { backgroundColor: '#d6e6da' }
                    :
                    typeBg ? { backgroundColor: '#d6e6da' } : { backgroundColor: '#cbd8df' }
            }>
                <div className='containerLogo'>
                    <img src={imagesAssets(`./TechLabLogoSloganBlueAsset.png`)} alt="Imagen" />
                </div>
                <div className="containerButtomGlobal">
                    <a href="mailto:techlab@iadb.org">
                        <button type="button" className="btn btn-outline-primary btnContactUsResponsive">
                            <FormattedMessage id={'header.global.buttom'} />
                        </button>
                    </a>
                </div>
            </div>
            <div className='sectionContactUs' style={typeBg ? { backgroundColor: '#cbd8df' } : { backgroundColor: '#d6e6da' }}>
                <div className='containerContactUs' style={
                    showItem ?
                        (typeTextPage == 'solutionsHome' || typeTextPage == 'technologiesHome' || typeTextPage == 'detailTecnologie') ?
                            { justifyContent: 'space-evenly' }
                            :
                            null
                        :
                        { justifyContent: 'end', marginRight: '10%' }
                }>
                    <h2 className='title' style={
                        showItem ?
                            (typeTextPage == 'solutionsHome' || typeTextPage == 'technologiesHome') ?
                                { display: 'initial', fontSize: '17px', height: '65px', maxWidth: '700px', minWidth: '500px', textAlign: 'center' }
                                :
                                (typeTextPage == 'detailTecnologie') ?
                                    { display: 'initial', fontSize: '25px', height: '30px' }
                                    :
                                    { display: 'initial' }
                            :
                            { display: 'none' }

                    }>
                        {
                            (typeTextPage == 'detailOurWork' || typeTextPage == 'ourWork' || typeTextPage == 'resources' || typeTextPage == 'services') ?
                                <FormattedMessage id={'header.global.title'} />
                                :
                                (typeTextPage == 'solutionsHome' || typeTextPage == 'technologiesHome') ?
                                    <>
                                        <FormattedMessage id={'header.global.title.observatory'} /><br />
                                        <FormattedMessage id={'header.global.title.observatory2'} />
                                    </>

                                    :
                                    (typeTextPage == 'detailTecnologie') ?
                                        <FormattedMessage id={'header.global.title.tecnologie'} />
                                        :
                                        <FormattedMessage id={'header.global.title.solution'} />
                        }
                    </h2>
                    <a href="mailto:techlab@iadb.org">
                        <button type="button" className="btn btn-outline-primary btnContactUs">
                            <FormattedMessage id={'header.global.buttom'} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
