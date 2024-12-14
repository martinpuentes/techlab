import * as React from "react";
import { SectionSelect } from '../../components/global/sectionSelects/sectionSelect';
import '../../styles/pages/OurWork.module.scss';
import '../../styles/App.scss';
import { HeaderContactUs } from "../../components/global/headerContactUs/headerContactUs";
import { CarouselCards } from "../../components/global/carouselCards/carouselCards";
import { ResourcesService } from "../../services/resources.service";
import { TecnologiesService } from '../../services/tecnologies.service';
import Navbar from '../../components/global/navbar/Navbar';
import LinearProgress from '@material-ui/core/LinearProgress';

const SectionCardsFilter = React.lazy(() => import("../../components/resources/sectionCardsFilter"));

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];


export const Resources = ({ dataProp }) => {

  const [resourceItemFilter, setResourceItemFilter] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState(false);

  const [resourceItem, setResourceItem] = React.useState([]);
  const [resourceRecentItem, setResourceRecentItem] = React.useState([]);
  const [technologiesItem, setTechnologiesItem] = React.useState([]);
  const resourceService = new ResourcesService(dataProp.siteUrl);
  const tecnologiesService = new TecnologiesService(dataProp.siteUrl);

  React.useEffect(() => {
    resourceService.getResources().then((data) => {
      const dataResources = data.data.value;
      setResourceItem(dataResources);
    });
    resourceService.getResourcesSortedByDate().then((data) => {
      const dataResourcesRecents = data.data.value;
      setResourceRecentItem(dataResourcesRecents);
    });
    tecnologiesService.getTechnologies().then((data) => {
      const dataTechnologies = data.data.value;
      setTechnologiesItem(dataTechnologies);
    });
  }, []);

  return (
    <>
      <Navbar namePath={'resources'} />
      <HeaderContactUs typeBg={true} showItem={true} typeTextPage='resources' />
      <CarouselCards ourWorkItem={resourceItem} recentItem={resourceRecentItem} technologiesList={technologiesItem} type={'resources'} />

      <SectionSelect technologies={technologiesItem} items={resourceItem} setItems={setResourceItemFilter} service={resourceService} setSelectedOption={setSelectedOptions} pageType='resources' />
      <React.Suspense fallback={
        <LinearProgress />
      }>
        <div className="sectionCardsFilterResources">
          {
            selectedOptions ?

              resourceItemFilter.length > 0 ?
                resourceItemFilter?.map((item, i) => {
                  return (
                    <SectionCardsFilter
                      key={i}
                      bgColor={alternatingBgColor[i % alternatingBgColor.length]}
                      technologiesList={technologiesItem}
                      item={item}
                    />
                  );
                })
                :
                <h1 className='messageError'>Resource not found...</h1>
              :
              resourceItem?.map((item, i) => {
                return (
                  <SectionCardsFilter
                    key={i}
                    bgColor={alternatingBgColor[i % alternatingBgColor.length]}
                    technologiesList={technologiesItem}
                    item={item}
                  />
                );
              })
          }
        </div>
      </React.Suspense>
    </>
  );
};
