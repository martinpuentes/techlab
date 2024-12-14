import * as React from 'react';
import '../../../styles/App.scss';
import { imagesAssets, iconsAssets } from "../../../mocks/ImagesAssets";
import { HeaderSection } from './children/headerSection';
import { DescriptionMainSection } from './children/descriptionMainSection';
import { ResourceCardsSection } from './children/resourceCardsSection';
import { useParams } from 'react-router-dom';
import { HeaderContactUs } from '../../global/headerContactUs/headerContactUs';
import { OurWorkService } from '../../../services/ourWork.service';
import { ResourcesService } from '../../../services/resources.service';
import { TecnologiesService } from '../../../services/tecnologies.service';
import Navbar from '../../../components/global/navbar/Navbar';

export const DetailsOurWork = ({ dataProp }) => {

    const { projectID } = useParams();

    const [detailItem, setDetailItem] = React.useState([]);
    const [technologiesItem, setTechnologiesItem] = React.useState([]);
    const [resourceItem, setResourceItem] = React.useState([]);
    const ourWorkService = new OurWorkService(dataProp.siteUrl);
    const resourceService = new ResourcesService(dataProp.siteUrl);
    const tecnologiesService = new TecnologiesService(dataProp.siteUrl);

    React.useEffect(() => {
        ourWorkService.getProjects().then((data) => {
            const dataProjects = data.data.value;
            const detailProject = dataProjects.find((obj) => {
                return obj.Slug === projectID;
            });
            setDetailItem(detailProject);
            console.log(detailProject);
            resourceService.getResourcesByProject(detailProject.Id).then((dataResource) => {
                console.log(dataResource);
                const dataResources = dataResource.data.value;
                setResourceItem(dataResources);
                console.log('Resources: ', dataResources);
            });
        });
        tecnologiesService.getTechnologies().then((data) => {
            const dataTechnologies = data.data.value;
            setTechnologiesItem(dataTechnologies);
            console.log("Technologies", dataTechnologies);
        });
    }, []);

    return (
        <>
            <Navbar namePath={'our-work'} />
            <HeaderContactUs typeBg={true} showItem={true} typeTextPage='detailOurWork' />
            <HeaderSection urlImage={[imagesAssets(`./LogoExplore.png`), imagesAssets(`./LogoExperiment.png`), imagesAssets(`./LogoShare.png`), imagesAssets(`./Recurso_4.png`)]} detailProject={detailItem} technologiesList={technologiesItem} />
            <DescriptionMainSection detailProject={detailItem} />
            {
                resourceItem.length > 0 ?
                    <ResourceCardsSection urlImage={imagesAssets(`./Recurso_3.png`)} resourceItem={resourceItem} />
                    :
                    null
            }

        </>
    );
};
