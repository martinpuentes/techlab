export interface Companies {
    id:                            string;
    council_id:                    string;
    company_id:                    string;
    created_at:                    Date;
    updated_at:                    Date;
    name:                          string;
    web_url:                       string;
    description:                   null | string;
    employees:                     number | null;
    location:                      string;
    contact_email:                 null | string;
    founded:                       Date;
    logo:                          string;
    promo_video:                   any[];
    twitter:                       null | string;
    discarded_at:                  null;
    relationship_stage:            RelationshipStage;
    num_employees_enum:            null | string;
    rating_template_id:            string;
    location_city:                 string;
    location_country:              string;
    location_region:               string;
    location_continent:            LocationContinent;
    primary_topic:                 null;
    primary_industry:              null;
    revenue_range:                 null | string;
    partner_type:                  PartnerType;
    added_from_source:             null;
    applicant_submission_id:       null;
    linkedin:                      null;
    added_by_id:                   null | string;
    relationship_stage_updated_at: Date;
    council_company_score:         number;
    idb_connection_options:        any[];
    agreement_types:               any[];
    competitors:                   any[];
    customers:                     any[];
    projects:                      any[];
    company_relationship_owners:   any[];
    company_contacts:              any[];
    universal_rating:              UniversalRating;
    custom_fields_by_company:      CustomFieldsByCompany[];
    resource_industries:           ResourceIndustry[];
    resource_topics:               ResourceTopic[];
}

export interface CustomFieldsByCompany {
    company_custom_field:      string;
    public:                    boolean;
    council_id:                string;
    company_id:                string;
    from_submission:           boolean;
    created_at:                Date;
    updated_at:                Date;
    sort_number:               number | null;
    documents:                 any[];
    custom_field_template_id?: string;
    custom_field_template?:    CustomFieldTemplate;
    custom_field_group_id:     string;
    custom_field_group:        CustomFieldsByCompanyCustomFieldGroup;
    teams:                     any[];
    users:                     any[];
    field_name:                FieldName;
    field_type:                FieldType;
    field_values:              any[];
    multiselect:               boolean;
    option_values:             OptionValue[];
    option_selected:           any[];
    field_placeholder?:        string;
}

export interface CustomFieldsByCompanyCustomFieldGroup {
    name: Name;
}

export enum Name {
    DocumentsPresentations = "Documents + Presentations",
    KeyCriteria = "Key Criteria",
}

export interface CustomFieldTemplate {
    custom_field_template_id: string;
    council_id:               string;
    field_name:               FieldName;
    field_type:               FieldType;
    position:                 number;
    public:                   boolean;
    hide:                     boolean;
    field_placeholder:        FieldPlaceholder;
    multiselect:              boolean;
    option_values:            OptionValue[];
    custom_field_group_id:    string;
    custom_field_group:       CustomFieldTemplateCustomFieldGroup;
    teams:                    any[];
    users:                    any[];
    existing_records:         number;
}

export interface CustomFieldTemplateCustomFieldGroup {
    name:     Name;
    position: number;
}

export enum FieldName {
    DevelopmentPhase = "Development Phase",
    Documents = "Documents",
    IDBGConnection = "IDBG Connection",
    Integrations = "Integrations",
    PresentationSlides = "Presentation Slides",
    PresentationVideo = "Presentation Video",
    PricingModel = "Pricing Model",
    ProductDescription = "Product Description",
    UniqueFeatures = "Unique Features",
}

export enum FieldPlaceholder {
    Empty = "",
    SelectTheCompanySPhaseOfMaturity = "Select the company's phase of maturity",
}

export enum FieldType {
    Checklist = "checklist",
    Document = "document",
    Dropdown = "dropdown",
    Slide = "slide",
    Text = "text",
    Video = "video",
}

export enum OptionValue {
    EarlyGrowth = "Early-Growth",
    EnterpriseReady = "Enterprise-Ready",
    FeatureBased = "Feature-Based",
    FlatRate = "Flat Rate",
    IDBLab = "IDB Lab",
    Ite = "ITE",
    KICInnovation = "KIC Innovation",
    PerUser = "Per User",
    PreLaunch = "Pre-Launch",
    ProductInMarket = "Product In Market",
    TechLab = "TechLab",
    Tiered = "Tiered",
    UsageBased = "Usage-Based",
    Vpc = "VPC",
    Vps = "VPS",
}

export enum LocationContinent {
    NorthAmerica = "North America",
    SouthAmerica = "South America",
}

export enum PartnerType {
    None = "none",
}

export enum RelationshipStage {
    Discover = "discover",
}

export interface ResourceIndustry {
    resource_industry_id: string;
    default:              boolean;
    industry:             Industry;
}

export interface Industry {
    id:   string;
    name: string;
}

export interface ResourceTopic {
    resource_topic_id: string;
    default:           boolean;
    topic:             Industry;
}

export interface UniversalRating {
    rating_category_id:   string;
    rating_category_name: string;
    rating_template_id:   string;
    rating_template_name: RatingTemplateName;
    value:                null;
    universal_rating_id:  null;
}

export enum RatingTemplateName {
    CompanyRating = "Company Rating",
}
