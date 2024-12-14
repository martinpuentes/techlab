import * as React from 'react';
import { SectionSelect } from '../../components/global/sectionSelects/sectionSelect';
import '../../styles/pages/OurWork.module.scss';
import '../../styles/App.scss';
import { HeaderContactUs } from '../../components/global/headerContactUs/headerContactUs';
import { CarouselCards } from '../../components/global/carouselCards/carouselCards';
import { OurWorkService } from '../../services/ourWork.service';
import { TecnologiesService } from '../../services/tecnologies.service';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/global/navbar/Navbar';
import LinearProgress from '@material-ui/core/LinearProgress';

const SectionCardsFilter = React.lazy(() => import("../../components/ourWork/sectionCardsFilter"));

const alternatingBgColor = ['bgColor1', 'bgColor2', 'bgColor3', 'bgColor3', 'bgColor2', 'bgColor1'];

export const OurWork = ({ dataProp }) => {

  const [ourWorkItemFilter, setOurWorkItemFilter] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState(false);

  const [ourWorkItem, setOurWorkItem] = React.useState([]);
  const [ourWorkRecentItem, setOurWorkRecentItem] = React.useState([]);
  const [technologiesItem, setTechnologiesItem] = React.useState([]);
  const ourWorkService = new OurWorkService(dataProp.siteUrl);
  const tecnologiesService = new TecnologiesService(dataProp.siteUrl);

  React.useEffect(() => {
    ourWorkService.getProjects().then((data) => {
      const dataProjects = data.data.value;
      setOurWorkItem(dataProjects);
    });
    ourWorkService.getProjectsSortedByDate().then((data) => {
      const dataProjectsRecents = data.data.value;
      setOurWorkRecentItem(dataProjectsRecents);
    });
    tecnologiesService.getTechnologies().then((data) => {
      const dataTechnologies = data.data.value;
      setTechnologiesItem(dataTechnologies);
    });
  }, []);

  return (
    <>
      <Navbar namePath={'our-work'} />
      <HeaderContactUs typeBg={true} showItem={true} typeTextPage='ourWork' />
      <CarouselCards ourWorkItem={ourWorkItem} recentItem={ourWorkRecentItem} technologiesList={technologiesItem} type={"projects"} />

      <SectionSelect technologies={technologiesItem} items={ourWorkItem} setItems={setOurWorkItemFilter} setSelectedOption={setSelectedOptions} service={ourWorkService} pageType='ourWork' />
      <React.Suspense fallback={
        <LinearProgress />
      }>
        <div className='sectionCardsFilterOurWork'>
          {

            selectedOptions ?

              ourWorkItemFilter.length > 0 ?
                ourWorkItemFilter?.map((item, i) => {
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
                <h1 className='messageError'>Project not found...</h1>
              :
              ourWorkItem?.map((item, i) => {
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