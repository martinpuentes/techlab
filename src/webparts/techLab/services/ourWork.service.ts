import * as React from "react";
import axios from "axios";

export class OurWorkService extends React.Component {
  private siteUrl: string;
  private mainList: string;

  constructor(siteUrl: string) {
    super(null);
    this.siteUrl = siteUrl;
    this.mainList = "Web_Projects";
  }

  public async getProjects(): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=IsDisplayed ne true`;
    return axios.get(itemsUrl);
  }

  public async getProjectsSortedByDate(): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=IsDisplayed ne true&$orderby=CompletedDate asc`;
    return axios.get(itemsUrl);
  }

  public async getProjectsParams(listTechnology, listYear, listType, listStakeholders, listTrack, TechnologiesOriginal): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=${this.filterPlus(listTrack, ' or ', 'Track')} and ${this.filterPlus(listType, ' or ', 'ProjectType')} and ${this.filterYear(listYear, ' or ')} and ${this.filterTecnologies(listTechnology, ' or ', TechnologiesOriginal)} and ${this.filterStakeholders(listStakeholders, ' or ')} and (IsDisplayed ne true)`;
    return axios.get(itemsUrl);
  }

  public async getProjectsByTechnologie(technologyId): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=(Technology eq ${technologyId}) and (IsDisplayed ne true)`;
    return axios.get(itemsUrl);
  }


  private filterPlus(arr, separator, typeList) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined)
        str += `${typeList} eq '${arr[i]}'`;
      if (i < arr.length - 1)
        str += separator;
    }

    return arr.length == 0 ? `(${typeList} ne '%')` : `(${str})`;
  }

  private filterYear(arr, separator) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined)
        str += `CompletedDate ge '${arr[i]}-01-01T00:00:00Z' and CompletedDate le '${arr[i]}-12-31T23:59:59Z'`;
      if (i < arr.length - 1)
        str += separator;
    }

    return arr.length == 0 ? `(CompletedDate ne '1999-01-01T00:00:00Z')` : `(${str})`;
  }

  private filterTecnologies(arr, separator, technologies) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined)
        str += `Technology eq '${technologies[technologies.findIndex(x => x.Title === arr[i])].Id}'`;
      if (i < arr.length - 1)
        str += separator;
    }

    return arr.length == 0 ? `(Technology ne 0)` : `(${str})`;
  }

  private filterStakeholders(arr, separator) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined)
        str += `substringof('${arr[i]}',Stakeholders)`;
      if (i < arr.length - 1)
        str += separator;
    }

    return arr.length == 0 ? `(Stakeholders ne '0')` : `(${str})`;
  }

}

//' (Track eq 'Experimentation') && (Track eq 'Experimentation') && (Track eq 'Experimentation') && (Track eq 'Experimentation') && (Track eq 'Experimentation') '
//  &$filter=(Track eq 'Experimentation')and((Industry eq 'Transport') or (Industry eq 'Trade'))`;