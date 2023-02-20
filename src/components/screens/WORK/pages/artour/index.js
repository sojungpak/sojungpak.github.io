/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'CMU AR Tour',
  tags: ['AR'],
  task: 'Design an AR tour experience for 10 years in the future with the concept of “A Day in the Life of a CMU Student” given the limitations and weaknesses of current campus tours. Your goal is to tell stories, convey useful information, and delight users.',
  timeline: {
    duration: '3 Weeks',
    time: '(Fall 2022)',
  },
  collaborators: ['Dion Lewis'],
  skills: ['AR Design', 'Experience Design', 'Interaction Design', 'Lo-Fi Prototyping', 'Storyboarding'],
  programs: ['Figma', 'Adobe Ai/AE/Aero'],
  process: 'https://medium.com/@Ysius/cmu-ar-tour-d377c329b1c8',
};

const ARTour = (props) => {
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

      <div id="arWork">
        <h2>Final Tour Experience</h2>
        <iframe className="video" src="https://www.youtube.com/embed/RIDTmNa9ocg" title="AR Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        <h2>Initial Research</h2>
        <h3>Identifying Current Weaknesses</h3>
        <p>To brainstorm key points of considerations for current weaknesses, we went on a real CMU tour.</p>
        <p className="list">☆ Didn’t fully showcase every program or building (depends on who the tour guide is as they have a better understanding of their personal experiences are)</p>
        <p className="list">☆ Lots of walking through random hallways (tour layout wasn’t very intuitive, easy for people to get lost)</p>

        <div id="personaBuilding">
          <h3>Persona Building</h3>
          <div>
            <img src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />
            <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
            <img src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
          </div>
        </div>

        <div id="storyboarding">
          <h2>Storyboarding</h2>
          <div>
            <img src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
            <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
            <img src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
          </div>
        </div>

        <h2>Interactions</h2>
        <div className="row">
          <img src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
          <div>
            <h2>Interaction 1</h2>
            <h3>Schedule</h3>
            <p>The schedule feature is accessible at all times by dragging the icon out from your hand onto the environment. This allows users to access various parts of the day at any time at their own pace.</p>
          </div>
        </div>

        <div id="midRow" className="row">
          <div>
            <h2>Interaction 2</h2>
            <h3>Personalized Guide</h3>
            <p>A survey is provided at the beginning of the experience to gather information about the user’s interests, which is then used to create a match for a tour guide. This tour guide stays with the user throughout the experience, acting as a guide around the campus.</p>
          </div>
          <img src={photos[7].src} alt="work" onClick={() => openLightbox(7)} />
        </div>

        <div className="row">
          <img src={photos[8].src} alt="work" onClick={() => openLightbox(8)} />
          <div>
            <h2>Interaction 3</h2>
            <h3>Personal Anecdotes</h3>
            <p>Each personalized guide provides unique personal anecdotes that highlight unique aspects about campus and student life that is often overlooked. This also provides a more realistic and trustworthy outlook on student life.</p>
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

export default ARTour;
