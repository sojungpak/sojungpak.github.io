/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'Typography Studies',
  tags: ['Graphics', 'Motion'],
  task: 'Collection of graphical studies and an animation focusing on typographical variables exploring visual hierarchy, typesetting, and motion.',
  timeline: {
    duration: '7 Weeks',
    time: '(Fall 2022)',
  },
  collaborators: ['Individual'],
  skills: ['Motion Graphics', 'Visual Design'],
  programs: ['Adobe Ai, Id, Ae'],
  process: 'https://medium.com/@sojungp/list/typography-studies-64f930fe9c77',
};

const Typography = (props) => {
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

      <div id="typographyWork">
        <h2>1 - Poster</h2>
        <h3>ReelAbilities is the largest film festival for films about people with disabilities</h3>
        <div className="posterImages">
          <img id="left" src={photos[0].thumb} alt="work" onClick={() => openLightbox(0)} />
          <div id="right">
            <div className="row">
              <img src={photos[1].thumb} alt="work" onClick={() => openLightbox(1)} />
              <img src={photos[2].thumb} alt="work" onClick={() => openLightbox(2)} />
              <img src={photos[3].thumb} alt="work" onClick={() => openLightbox(3)} />
            </div>
            <div className="row" id="row2">
              <img src={photos[4].thumb} alt="work" onClick={() => openLightbox(4)} />
              <img src={photos[5].thumb} alt="work" onClick={() => openLightbox(5)} />
              <img src={photos[6].thumb} alt="work" onClick={() => openLightbox(6)} />
            </div>
            <div className="row">
              <img src={photos[7].thumb} alt="work" onClick={() => openLightbox(7)} />
              <img src={photos[8].thumb} alt="work" onClick={() => openLightbox(8)} />
              <img src={photos[9].thumb} alt="work" onClick={() => openLightbox(9)} />
            </div>
          </div>
        </div>

        <h2>2 - Spread</h2>
        <h3>Introducing the typeface Didot through a 2-page spread</h3>
        <div className="spreadImages">
          <img id="left" src={photos[10].thumb} alt="work" onClick={() => openLightbox(10)} />
          <div id="right">
            <div className="row">
              <img src={photos[11].thumb} alt="work" onClick={() => openLightbox(11)} />
              <img src={photos[12].thumb} alt="work" onClick={() => openLightbox(12)} />
            </div>
            <div className="row">
              <img src={photos[13].thumb} alt="work" onClick={() => openLightbox(13)} />
              <img src={photos[14].thumb} alt="work" onClick={() => openLightbox(14)} />
            </div>
            <div className="row">
              <img src={photos[15].thumb} alt="work" onClick={() => openLightbox(15)} />
              <img src={photos[16].thumb} alt="work" onClick={() => openLightbox(16)} />
            </div>
          </div>
        </div>

        <h2>3 - Animation</h2>
        <h3>60-second video that highlights the unique characteristics and personality of Didot in the context of its use</h3>
        <iframe className="video" src="https://www.youtube.com/embed/ynSJrCEVBIY" title="Animation Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
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

export default Typography;
