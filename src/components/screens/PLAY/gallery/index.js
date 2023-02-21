import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PhotoAlbum from 'react-photo-album';
import photos from './photos';
import './style.scss';

const PlayGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const source = photos[props.type];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div id={props.mobile ? 'playGalleryM' : 'playGallery'}>

      <PhotoAlbum photos={source.photos}
        layout={props.mobile ? 'columns' : source.layout}
        onClick={({ index }) => openLightbox(index)}
        columns={props.mobile ? 1 : 3}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={source.photos.map((x) => ({
                ...x,
                src: x.full || x.src,
                caption: x.caption,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
export default PlayGallery;
