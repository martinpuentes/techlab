import axios from 'axios';
import * as React from 'react';
import { Companies } from '../interfaces/ICompanies';

export default class SolutionService extends React.Component {

    private apiUrl: string;
    private apiKey: string;
    constructor() {
        super(null);
        this.apiKey = "Z1kcvUvr4nIECLcrTtxNt6QAvkOQT06c";
        this.apiUrl = "https://apiv2.traction.network/api/v2";
    }

    public getCompanies(): Promise<{data:Companies[]}> {
        let dataApi = `${this.apiUrl}/idb/companies`;
        return axios.get(dataApi,  {
           headers:{
            "X-API-KEY": this.apiKey
           }
        });
    }



}
