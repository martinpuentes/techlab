import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const DescriptionMainSection = ({ detailProject }) => {

    const [arrStakeholders, setArrStakeholders] = React.useState([]);

    React.useEffect(() => {
        detailProject.Stakeholders ?
            setArrStakeholders(detailProject.Stakeholders.split('/'))
            :
            setArrStakeholders(undefined);
    }, [detailProject]);

    return (
        <div className='container-fluid descriptionMainContainer'>
            <div className='sectionStakeholders' style={arrStakeholders ? { display: 'block' } : { display: 'none' }} >
                <p className='titleStakeholders'><b>Stakeholders</b></p>
                <div className='itemsSection'>
                    {
                        arrStakeholders?.map((item, i) => {
                            return (
                                <div className='item' key={i} id={arrStakeholders.length > 1 && i == 1 ? arrStakeholders.length == 3 ? 'centerItem' : 'rightItem' : 'uniqueItem'}>
                                    <p>{item}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className='sectionProblem'>
                <p className='titleProblem'><FormattedMessage id={'detailProject.title.problem'} /></p>
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} className='descriptionProblem'>
                    {
                        detailProject.ContentBody ?
                            detailProject.ContentBody
                            :
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }
                </ReactMarkdown>
            </div>
            <div className='sectionSolution' style={detailProject.ContentResults === null ? { display: 'none' } : { display: 'block' }}>
                <p className='titleSolution'><FormattedMessage id={'detailProject.title.solution'} /></p>
                <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]} className='descriptionSolution'>
                    {

                        detailProject.ContentResults ?
                            detailProject.ContentResults
                            :
                            "There are no solutions!"
                    }
                </ReactMarkdown>
            </div>
        </div>
    );
};
