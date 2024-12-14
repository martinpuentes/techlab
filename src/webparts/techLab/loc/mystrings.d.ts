declare interface ITechLabWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  ListNameFieldLabel: string; 
}

declare module 'TechLabWebPartStrings' {
  const strings: ITechLabWebPartStrings;
  export = strings;
}
