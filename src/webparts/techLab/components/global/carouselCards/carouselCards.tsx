import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FormattedMessage } from 'react-intl';
import { Skeleton } from "@material-ui/lab";

const RecentProjectsCard = React.lazy(() => import("./children/recentProjectsCard"));
const HighlightedProjectsCard = React.lazy(() => import("./children/highlightedProjectsCard"));

export const CarouselCards = ({
    ourWorkItem,
    technologiesList,
    type,
    recentItem
}) => {

    const [lastProject, setLastProject] = React.useState<any[]>([]);

    React.useEffect(() => {
        getLastProjects();
    }, [ourWorkItem, recentItem]);

    const getLastProjects = () => {
        const arrLastProject = recentItem?.slice(ourWorkItem.length - 5);
        setLastProject(arrLastProject);
    };

    return (
        <div className='container-fluid containerBannerCards' style={type == "detailTechnology" ? {backgroundColor: 'white'} : null}>
            <div className='sectionLogo cardMobileOutwork' style={type == "detailTechnology" ? {backgroundColor: 'white'} : null}>
                <div className='carrouselCardsLeft'>
                    <h3> {type == "resources" ? <FormattedMessage id={'resources.banner.title1'} /> : <FormattedMessage id={'ourwork.banner.title1'} />} </h3>
                    <React.Suspense fallback={
                        <>
                            <Skeleton variant="rect" className="rectSkeletonRecentSection" />
                            <div className='linesSkeletonRecentSection'>
                                <Skeleton animation="wave" height={40} width="35%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={40} width="70%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={40} width="30%" />
                            </div>
                        </>
                    }>
                        <Carousel className='carouselContainer'>
                            {
                                type == "resources" ?
                                    lastProject?.map((item, i) => {

                                        return (
                                            <Carousel.Item key={i}>
                                                <RecentProjectsCard
                                                    date={item?.AddedDate}
                                                    image={item.Thumbnail}
                                                    title={item.Title}
                                                    id={undefined}
                                                    technologyId={item.TechnologyId}
                                                    technologiesList={technologiesList}
                                                    linkResource={item.Url?.Url}
                                                    typeResource={item.ResourceType}
                                                />
                                            </Carousel.Item>
                                        );

                                    })
                                    :
                                    type == "detailTechnology" ?
                                        lastProject?.map((item, i) => {

                                            return (
                                                <Carousel.Item key={i}>
                                                    <RecentProjectsCard
                                                        date={item?.Date}
                                                        image={item.Thumbnail}
                                                        title={item.Title}
                                                        id={undefined}
                                                        technologyId={item.TechnologyId}
                                                        technologiesList={technologiesList}
                                                        linkResource={item.Url?.Url}
                                                        typeResource={undefined}
                                                    />
                                                </Carousel.Item>
                                            );

                                        })
                                        :
                                        lastProject?.map((item, i) => {

                                            return (
                                                <Carousel.Item key={i}>
                                                    <RecentProjectsCard
                                                        date={item.CompletedDate}
                                                        image={item.Thumbnail}
                                                        title={item.Title}
                                                        id={item.Slug}
                                                        technologyId={item.TechnologyId}
                                                        technologiesList={technologiesList}
                                                        linkResource={undefined}
                                                        typeResource={undefined}
                                                    />
                                                </Carousel.Item>
                                            );

                                        })
                            }
                        </Carousel>
                    </React.Suspense>
                </div>
            </div>


            <div className='sectionContactUs' style={type == "detailTechnology" ? {backgroundColor: 'white'} : null}>
                <div className='carrouselCardsRight'>
                    <h3> {type == "resources" ? <FormattedMessage id={'resources.banner.title2'} /> : <FormattedMessage id={'ourwork.banner.title2'} />}</h3>
                    <React.Suspense fallback={
                        <>
                            <Skeleton variant="rect" className='rectSkeletonHighlightedSection' />
                            <div style={{ width: '100%' }}>
                                <Skeleton animation="wave" height={40} width="35%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={40} width="70%" style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={40} width="30%" />
                            </div>
                        </>
                    }>
                        <Carousel className='carouselContainer'>
                            {
                                type == "resources" ?
                                    ourWorkItem?.map((item, i) => {

                                        return (
                                            item.IsFeatured ?
                                                <Carousel.Item key={i}>
                                                    <HighlightedProjectsCard
                                                        date={item.AddedDate}
                                                        image={item.Thumbnail}
                                                        title={item.Title}
                                                        id={undefined}
                                                        technologyId={item.TechnologyId}
                                                        technologiesList={technologiesList}
                                                        linkResource={item.Url?.Url}
                                                        typeResource={item.ResourceType}
                                                    />
                                                </Carousel.Item>
                                                :
                                                null
                                        );

                                    })
                                    :
                                    type == "detailTechnology" ?
                                        ourWorkItem?.map((item, i) => {

                                            return (
                                                item.IsFeatured ?
                                                    <Carousel.Item key={i}>
                                                        <HighlightedProjectsCard
                                                            date={item.Date}
                                                            image={item.Thumbnail}
                                                            title={item.Title}
                                                            id={undefined}
                                                            technologyId={item.TechnologyId}
                                                            technologiesList={technologiesList}
                                                            linkResource={item.Url?.Url}
                                                            typeResource={undefined}
                                                        />
                                                    </Carousel.Item>
                                                    :
                                                    null
                                            );

                                        })
                                        :
                                        ourWorkItem?.map((item, i) => {

                                            return (
                                                item.IsFeatured ?
                                                    <Carousel.Item key={i}>
                                                        <HighlightedProjectsCard
                                                            date={item.CompletedDate}
                                                            image={item.Thumbnail}
                                                            title={item.Title}
                                                            id={item.Slug}
                                                            technologyId={item.TechnologyId}
                                                            technologiesList={technologiesList}
                                                            linkResource={undefined}
                                                            typeResource={undefined}
                                                        />
                                                    </Carousel.Item>
                                                    :
                                                    null
                                            );

                                        })
                            }
                        </Carousel>
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
};