import { Dialog } from "@material-ui/core";
import * as React from "react";
import { imagesAssets, iconsAssets } from "../../../mocks/ImagesAssets";



const Video = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="home_video">
      <img onClick={handleClickOpen} className="iconPLayVideo" src={iconsAssets("./play-icon.png")} alt="" />
      <img onClick={handleClickOpen} className="bannerVideo" src="https://idbg.sharepoint.com/:i:/r/sites/ITEIPS_WebTechLab/Shared%20Documents/General/Archivos%20Dise%C3%B1o/Media/banner.png?csf=1&web=1&e=77g3fK" alt="" />
      <Dialog className="embed-responsive embed-responsive-21by9" onClose={handleClose} open={open}>
        <iframe
          className="embed-responsive-item"
          id="video_iframe"
          src="https://web.microsoftstream.com/embed/video/37796755-d40a-488a-b75b-344fd5419d69?autoplay=True&muted=1&showinfo=true"
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </Dialog>
    </div>
  );
};

export default Video;