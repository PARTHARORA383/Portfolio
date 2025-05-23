// ZoomableImage.js
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; 

const ZoomableImage = ({ open, imageSrc, onClose }) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={[{ src: imageSrc }]}
    />
  );
};

export default ZoomableImage;
