import * as React from 'react';
import '../../styles/pages/Service.module.scss';
import { imagesAssets } from "../../mocks/ImagesAssets";
import { SectionCards } from '../../components/services/SectionCards';
import { SectionCarousel } from '../../components/services/SectionCarousel';
import { HeaderContactUs } from '../../components/global/headerContactUs/headerContactUs';
import { SectionBanner } from '../../components/services/SectionBanner';
import { ServicesMediaService } from '../../services/servicesMedia.service';
import Navbar from '../../components/global/navbar/Navbar';


export const Services = ({ dataProp }) => {

    const [mediaVideosItem, setMediaVideosItem] = React.useState([]);

    const servicesMediaService = new ServicesMediaService(dataProp.siteUrl);


    React.useEffect(() => {
        servicesMediaService.getVideosList().then((data) => {
            const dataListVideos = data.data.value;
            setMediaVideosItem(dataListVideos);
        });
    }, []);

    return (
        <>
            <Navbar namePath={'services'} />
            <div id='services'>
                <HeaderContactUs typeBg={false} showItem={true} typeTextPage='services' />
                <SectionBanner />
                <SectionCards urlImg={[imagesAssets(`./LogoExplore.png`), imagesAssets(`./LogoExperiment.png`), imagesAssets(`./LogoShare.png`)]} />
                {/* <SectionCarousel item={mediaVideosItem} /> */}
            </div>
        </>

    );
};