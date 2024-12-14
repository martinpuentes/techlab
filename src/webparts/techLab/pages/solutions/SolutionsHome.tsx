import React from 'react';
import { HeaderContactUs } from '../../components/global/headerContactUs/headerContactUs';
import { NavBarObservatory } from '../../components/global/navbar/navBarObservatory';
import Navbar from '../../components/global/navbar/Navbar';
import '../../styles/App.scss';

export const SolutionsHome = ({
    dataProp
}) => {
    return (
        <>
            <Navbar namePath={'observatory'} />
            <NavBarObservatory typePage={'solutions'} />
            <HeaderContactUs typeBg={true} showItem={true} typeTextPage='solutionsHome' />
            <div id='containerFrameSolution'>
                <iframe title="Radar Test Soluciones - Conexion al Endpoint"
                    className='responsiveIframe'
                    src="https://app.powerbi.com/view?r=eyJrIjoiYzA4ZmMwNGEtYjBkZS00MDVlLWIyM2MtZDIzODQ1Zjc4YTFkIiwidCI6IjlhOTM3M2YzLWI4ODktNDI3ZS05NjFmLTBlYjY3N2IxMzQzYyJ9&pageName=ReportSectionef402048d43dba545d72" allowFullScreen={true}>

                </iframe>
            </div>

        </>
    );
};
