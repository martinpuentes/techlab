import * as React from 'react';
import { Companies } from '../../interfaces/ICompanies';
import '../../styles/App.scss';




export const SectionCardsFiltersSolutions = ({
    companies
}) => {
    
    return (
        <>
            <div className="container mt-5 pt-2">
                {companies.map((company: Companies) => {
                    return (
                        <div className="cardSolutions">
                            <div className="titleMain">
                                <p>
                                    {company.location_country?.toUpperCase()}
                                </p>
                            </div>
                            <div className="companyName">
                                <h4 className='openBold'>
                                    {
                                        company.name
                                    }
                                </h4>
                            </div>
                            <div className="duoItems">
                                <div className="containerItemsSolution">
                                    <p className='m-0' >{company.resource_topics.length > 0 ? 'Technology' : null} <b className='openBold'>
                                        {
                                            company.resource_topics?.map((item, i) => {
                                                return (
                                                    company.resource_topics.length > 1 && i + 1 < company.resource_topics.length ?
                                                        item.topic.name + ' / '
                                                        :
                                                        item.topic.name
                                                );
                                            })
                                        }  </b> </p>
                                </div>
                                <a href={company.web_url}> <button><p className='m-0'>More info</p></button></a>
                            </div>
                            <div className="cardContent">
                                <div className="descri">
                                    <p>
                                        {
                                            company.description
                                        }
                                    </p>
                                </div>
                                <div className="forItems">
                                    <div className="tagItem">
                                        <p>POC TechaLab</p>
                                    </div>
                                    <div className="tagItem">
                                        <p>BID Project</p>
                                    </div>
                                    <div className="tagItem">
                                        <p>Stage {company.relationship_stage}</p>
                                    </div>
                                    <div className="tagItem">
                                        <p>Sector {company.resource_industries?.map((param, i) => {
                                            return (
                                                company.resource_industries.length > 1 && i + 1 < company.resource_industries.length ?
                                                    param.industry.name + ', '
                                                    :
                                                    param.industry.name
                                            );
                                        })
                                        }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </>
    );
};
