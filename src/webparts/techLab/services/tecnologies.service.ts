import * as React from "react";
import axios from "axios";

export class TecnologiesService extends React.Component {
  private siteUrl: string;
  private mainList: string;

  constructor(siteUrl: string) {
    super(null);
    this.siteUrl = siteUrl;
    this.mainList = "Web_Technology";
  }

  public async getTechnologies(): Promise<any> {
    let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items`;
    return axios.get(itemsUrl);
  } 
}