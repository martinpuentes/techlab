import * as React from 'react';
import { Dialog } from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../styles/App.scss';
import { imagesAssets, iconsAssets } from '../../mocks/ImagesAssets';
import { FormattedMessage } from 'react-intl';

export const SectionCarousel = ({
    item
}) => {
    const [open, setOpen] = React.useState(null);

    const handleClickOpen = (e) => {
        setOpen(e);
    };

    const handleClose = (e) => {
        setOpen(e);
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>

            <div className='mt-4 sectionCarouselService'>
                <h2 className='mt-5 mb-5 titleMainCarouselService openBold' >
                    <FormattedMessage id={'services.carousel.title'} />
                </h2>
                <Carousel responsive={responsive}>
                    {
                        item?.map((element, i) => {
                            return (
                                <div className="carouselVideoServices d-flex justify-content-center align-items-center position-relative ">
                                    <img onClick={() => handleClickOpen(i)}  className="bgCaoruselVideo w-100" src={element.Thumbnail?.Url} alt={element.Title} />
                                    <img onClick={() => handleClickOpen(i)} className='position-absolute playIcon' src={iconsAssets(`./play-icon.png`)} alt="" />
                                    <Dialog className="embed-responsive embed-responsive-21by9" onClose={() => handleClose(null)} open={i==open}>
                                        <iframe
                                            className="embed-responsive-item"
                                            id="video_iframe"
                                            src={element.Url?.Url}
                                            allowFullScreen
                                            allow="autoplay"
                                        ></iframe>
                                    </Dialog>
                                </div>
                            );
                        })
                    }

                </Carousel>
            </div>

        </>
    );
}; 
