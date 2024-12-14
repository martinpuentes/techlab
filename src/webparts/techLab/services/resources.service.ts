import * as React from "react";
import axios from "axios";


export class ResourcesService extends React.Component {
  private siteUrl: string;
  private mainList: string;

  constructor(siteUrl: string) {
    super(null);
    this.siteUrl = siteUrl;
    this.mainList = "Web_Resources";
  }

  public async getResources(): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=IsDisplayed ne true`;
    return axios.get(itemsUrl);
  }

  public async getResourcesSortedByDate(): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=IsDisplayed ne true&$orderby=AddedDate asc`;
    return axios.get(itemsUrl);
  }

  public async getResourcesParams(listTechnology, listYear, listType, TechnologiesOriginal): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=${this.filterPlus(listType, ' or ', 'ResourceType')} and ${this.filterYear(listYear, ' or ')} and ${this.filterTecnologies(listTechnology, ' or ', TechnologiesOriginal)} and (IsDisplayed ne true)`;
    return axios.get(itemsUrl);
  }

  public async getResourcesByTechnologie(technologyId): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=(Technology eq ${technologyId}) and (IsDisplayed ne true)`;
    return axios.get(itemsUrl);
  }

  public async getResourcesByProject(projectId): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=(Project eq ${projectId}) and (IsDisplayed ne true)`;
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
        str += `AddedDate ge '${arr[i]}-01-01T00:00:00Z' and AddedDate le '${arr[i]}-12-31T23:59:59Z'`;
      if (i < arr.length - 1)
        str += separator;
    }

    return arr.length == 0 ? `(AddedDate ne '1999-01-01T00:00:00Z')` : `(${str})`;
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
}
