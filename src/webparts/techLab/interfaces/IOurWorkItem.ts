export interface IOurWorkItem {
    Title?: string;
    Description?: string;
    ContentBody?: string;
    Tumbnail?: {
        Description?: string;
        Url?: string;
    };
    Track?: string;
    Industry? : string;
    CompletedDate?: string;
    Stakeholders?: string;
    ProjectType?: string;
    Countries?: [];
    Tags?: string;
    IsDisplayed?: boolean;
    IsFeatured?: boolean;
    Slug?: string;
    TechnologyId?: [];
    TechLabLeadId?: number;
    TechLabLeadStringId?: string;
    TechLabTeamId?: [number];
    TechLabTeamStringId?: [string];
    ContentResults?: string;
}  