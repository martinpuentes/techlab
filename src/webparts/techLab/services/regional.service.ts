
import axios from "axios"
import * as React from "react";


 

export class RegionalService extends React.Component{
  private siteUrl: string;
  private mainList: string 

  constructor(siteUrl:string){
    super(null)
    this.siteUrl = siteUrl
    this.mainList = 'Listado%20de%20TechLabs';
  }

  public async getNames(): Promise<any> {
    let itemsUrl = "https://idbg.sharepoint.com/sites/tech_lab/_api/web/lists/getbytitle('Web_Regional_Techlab_Section')/items"
    return axios.get(itemsUrl)
  }
  
}


