import * as React from 'react';
import '../../styles/App.scss';
import { HeaderContactUs } from '../../components/global/headerContactUs/headerContactUs';
import { SectionInfoTechnologies } from '../../components/technologies/SectionInfoTechnologies';
import { FooterTechnologies } from '../../components/technologies/FooterTechnologies';
import { SectionCardsTechnologies } from '../../components/technologies/SectionCardsTechnologies';
import { SectionBlockTecnologies } from '../../components/technologies/SectionBlockTecnologies';
import { SectionSubCardsTechnologies } from '../../components/technologies/SectionSubCardsTechnologies';
import { SectionMinFooter } from '../../components/technologies/SectionMinFooter';
import { useParams } from 'react-router-dom';
import { TecnologiesService } from '../../services/tecnologies.service';
import { ResourcesService } from '../../services/resources.service';
import { OurWorkService } from '../../services/ourWork.service';
import { TechUseCasesService } from '../../services/techUseCases.service';
import { TechIDBProjectService } from '../../services/techIDBProject.service';
import { NavBarObservatory } from '../../components/global/navbar/navBarObservatory';
import { SectionSelect } from '../../components/global/sectionSelects/sectionSelect';
import Navbar from '../../components/global/navbar/Navbar';
import { SectionTechIDB } from '../../components/technologies/SectionTechIDB';
import { IndustriesService } from '../../services/industries.service';

export const Technologies = ({ dataProp }) => {

    const { slug } = useParams();

    const [technologiesList, setTechnologiesList] = React.useState([]);
    const [industriesList, setIndustriesList] = React.useState([]);
    const [technologieItem, setTechnologieItem] = React.useState([]);
    const [resourcesItem, setResourcesItem] = React.useState([]);
    const [ourWorkItem, setOurWorkItem] = React.useState([]);
    const [techIDBProjectItem, setTechIDBProjectItem] = React.useState([]);
    const [techUseCasesItem, setTechUseCasesItem] = React.useState([]);
    const [techUseCasesDisplay, setTechUseCasesDisplay] = React.useState(Boolean);

    const tecnologiesService = new TecnologiesService(dataProp.siteUrl);
    const resourceService = new ResourcesService(dataProp.siteUrl);
    const ourWorkService = new OurWorkService(dataProp.siteUrl);
    const techIDBProjectService = new TechIDBProjectService(dataProp.siteUrl);
    const techUseCasesService = new TechUseCasesService(dataProp.siteUrl);
    const industriesService = new IndustriesService(dataProp.siteUrl);

    React.useEffect(() => {
        industriesService.getAllIndustries().then((data) => {
            const dataIndustries = data.data.value;
            setIndustriesList(dataIndustries);
        });
        tecnologiesService.getTechnologies().then((data) => {
            const dataTechnologies = data.data.value;
            setTechnologiesList(dataTechnologies);
            const detailTecnologie = dataTechnologies.find((obj) => {
                return obj.Slug === slug;
            });
            setTechnologieItem(detailTecnologie);

            techIDBProjectService.getTechIDBProjectsByTechnologie(detailTecnologie.Id).then((dataIDB) => {
                const dataTechIDBProjects = dataIDB.data.value;
                setTechIDBProjectItem(dataTechIDBProjects);
            });

            techUseCasesService.getTechUseCasesByTechnologie(detailTecnologie.Id).then((dataCase) => {
                const dataTechUseCases = dataCase.data.value;
                const recents = dataTechUseCases.find((obj) => {
                    return obj.Date !== null;
                });
                const featured = dataTechUseCases.find((obj1) => {
                    return obj1.IsFeatured !== null;
                });
                if (recents && featured) {
                    setTechUseCasesDisplay(true);
                } else {
                    setTechUseCasesDisplay(false);
                }
                setTechUseCasesItem(dataTechUseCases);
            });

            resourceService.getResourcesByTechnologie(detailTecnologie.Id).then((dataR) => {
                const dataResources = dataR.data.value;
                setResourcesItem(dataResources);
            });

            ourWorkService.getProjectsByTechnologie(detailTecnologie.Id).then((dataP) => {
                const dataProjects = dataP.data.value;
                setOurWorkItem(dataProjects);
            });
        });
    }, []);

    return (
        <>
            <Navbar namePath={'observatory'} />
            <NavBarObservatory typePage={'technologies'} />
            <HeaderContactUs typeBg={true} showItem={true} typeTextPage='detailTecnologie' />
            <SectionSelect technologies={undefined} items={undefined} setItems={undefined} service={undefined} setSelectedOption={undefined} pageType='technologies' />
            <SectionInfoTechnologies tecnologyitem={technologieItem} techIDBItem={techIDBProjectItem} technologiesList={technologiesList} />
            {
                techUseCasesItem.length > 0 && techUseCasesDisplay ?
                    <SectionCardsTechnologies techUseCasesItem={techUseCasesItem} dataProp={dataProp} technologieItem={technologieItem} technologiesList={technologiesList} />
                    :
                    null
            }
            {
                ourWorkItem.length > 0 ?
                    <SectionSubCardsTechnologies item={ourWorkItem} technologiesList={technologiesList} />
                    :
                    null
            }
            {
                techIDBProjectItem.length > 0 ?
                    <SectionTechIDB techIDBItem={techIDBProjectItem} />
                    :
                    null
            }
            {
                resourcesItem.length > 0 ?
                    <SectionBlockTecnologies item={resourcesItem} technologiesList={technologiesList} industriesList={industriesList} />
                    :
                    null
            }

            {/* <FooterTechnologies /> */}
        </>
    );
};
