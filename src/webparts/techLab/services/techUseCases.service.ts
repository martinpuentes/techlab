import * as React from "react";
import axios from "axios";

export class TechUseCasesService extends React.Component {
    private siteUrl: string;
    private mainList: string;

    constructor(siteUrl: string) {
        super(null);
        this.siteUrl = siteUrl;
        this.mainList = "Web_TechUseCases";
    }

    public async getTechUseCasesByTechnologie(technologyId): Promise<any> {
        let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=Technology eq ${technologyId}`;
        return axios.get(itemsUrl);
    }

    public async getTechUseCasesSortedByDate(technologyId): Promise<any> {
        let itemsUrl = `${this.siteUrl}/_api/web/lists/getbytitle('${this.mainList}')/items?&$filter=Technology eq ${technologyId}&$orderby=Date asc`;
        return axios.get(itemsUrl);
    }
}