import * as React from 'react';
import { SectionSelect } from '../../components/global/sectionSelects/sectionSelect';
import { HeaderContactUs } from '../../components/global/headerContactUs/headerContactUs';
import { SectionCardsFiltersSolutions } from '../../components/solutions/SectionCardsFiltersSolutions';
import '../../styles/App.scss';
import { Companies } from '../../interfaces/ICompanies';
import SolutionService from '../../services/solution.service';
import { NavBarObservatory } from '../../components/global/navbar/navBarObservatory';
import Navbar from '../../components/global/navbar/Navbar';



export const Solutions = () => {

  const [selectedOptions, setSelectedOptions] = React.useState(false);

  const solutionService = new SolutionService();
  const [companies, setCompanies] = React.useState<Companies[]>([]);
  const [technologiesItem, setTechnologiesItem] = React.useState<any[]>();

  React.useEffect(() => {
    solutionService.getCompanies().then((resp) => {
      console.log(resp.data);
      const companiesData = resp.data;
      setCompanies(companiesData);
    });

  }, []);

  React.useEffect(() => {
    setTechnologiesItem(companies.map((item) => item.resource_topics));
    console.log(technologiesItem);
  }, [companies]);

  return (
    <>
      <Navbar namePath={'observatory'} />
      <NavBarObservatory typePage={'solutions'} />
      <HeaderContactUs typeBg={true} showItem={false} typeTextPage='solutions' />
      <SectionSelect technologies={undefined} items={undefined} setItems={undefined} service={undefined} setSelectedOption={setSelectedOptions} pageType='services' />
      <SectionCardsFiltersSolutions companies={companies} />
    </>
  );
};
