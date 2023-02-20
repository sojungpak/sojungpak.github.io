/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'CACI International',
  tags: ['Logo', 'Graphics'],
  task: 'I had the opportunity to intern as a Graphic Design Intern in the Marketing Department. I participated in creating graphics for marketing campaigns, social media, videos/motion graphics, logos, deliverables, and presentations.',
  timeline: {
    duration: '12 Weeks',
    time: '(Summer 2022)',
  },
  collaborators: ['Individual'],
  skills: ['Design Research', 'Systems Thinking', 'Visual Design'],
  programs: ['Adobe Ps, Ai, Id, Ae'],
  process: 'https://medium.com/@sojungp/caci-internship-92bca531b8c1',
};

const CACI = (props) => {
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

      <div id="caciWork">
        <h2>Overview</h2>

        <div className="images">
          <div className="rowOne">
            <div className="colOne">
              <img src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />
              <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
            </div>

            <img id="img1" src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
            <img id="img2" src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
          </div>

          <div className="rowTwo">
            <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
            <img src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
            <img src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
            <img src={photos[7].src} alt="work" onClick={() => openLightbox(7)} />
          </div>
        </div>
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

export default CACI;
