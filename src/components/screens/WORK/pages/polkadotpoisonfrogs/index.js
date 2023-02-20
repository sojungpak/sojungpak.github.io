/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'Polkadot Poison Frog',
  tags: ['Logo', 'Graphics'],
  task: 'Conveying a story about the endangered Polkadot Poison Frog and its habitat, the Panama Forest, in three mediums.',
  timeline: {
    duration: '7 Weeks',
    time: '(Spring 2022)',
  },
  collaborators: ['Individual'],
  skills: ['Illustration', 'Motion Graphics', 'Physical Modeling'],
  programs: ['Adobe Ai, Ae'],
  process: 'https://medium.com/@sojungp/list/polkadot-poison-frog-cb2cd49c4f70',
};

const PolkaDotPoisonFrogs = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />

      <div id="ppfWork">
        <h2>1 - Illustration</h2>
        <h3>An illustration that combines text and imagery to tell a story about the animal and its habitat</h3>
        <img id="illustration" src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />
        <div id="illustrationRow" className="row">
          <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
          <img src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
          <img src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
        </div>

        <h2>2 - Plastic Model</h2>
        <h3>Using found and reclaimed packaging—plastic containers I’ve collected—to create the animal</h3>
        <div id="plasticRow1" className="row">
          <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
          <img src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
          <img src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
        </div>
        <div id="plasticRow2" className="row">
          <img src={photos[7].src} alt="work" onClick={() => openLightbox(7)} />
          <img src={photos[8].src} alt="work" onClick={() => openLightbox(8)} />
        </div>

        <h2>3 - Stop-Motion Animation</h2>
        <h3>Animation that speaks to the relationship between the animals and their environment, with a focus on the behavior</h3>
        <iframe className="video" src="https://www.youtube.com/embed/ByMWnyJMMqE" title="Animation Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                src: x.src,
                caption: x.caption,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PolkaDotPoisonFrogs;
