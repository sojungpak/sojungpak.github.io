/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'PGH Water Quality',
  tags: ['Systems Mapping'],
  task: 'Research and design a system map of a wicked problem in Pittsburgh, PA identifying root causes, insights, and interventions.',
  timeline: {
    duration: '7 Weeks',
    time: '(Fall 2022)',
  },
  collaborators: ['Charlie Blumberg', 'Ethan Huang', 'Joan Lee'],
  skills: ['Design Research', 'Systems Thinking', 'Visual Design'],
  programs: ['Figma'],
  process: 'https://medium.com/@sojungp/systems-mapping-54d67b039458',
};

const PGHWaterQuality = (props) => {
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

      <div id="pghWork">
        <h2>Final Map</h2>
        <img id="map" src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />

        <div id="research">
          <h2>Initial Research</h2>
          <h3>The Problem</h3>
          <p>Water — a resource that is often overlooked and taken for granted — is a serious problem affecting Pittsburgh; after all, Pittsburgh is famously situated at the intersection of three rivers, so why would water be an issue? As a result of outdated infrastructure, Pittsburgh’s water quality contains high amounts of lead from archaic, rusting lead pipes, posing an imminent threat to citizens’ health. The Lead Industries Association, for more than forty years since 1928, lobbied to promote the benefits of lead piping and plumbing. Despite available evidence that lead piping was dangerous, the lead industry continued to advocate for the use of lead pipes in cities, leading to issues decades down the line. The remnants of the mining that catapulted Pittsburgh to become the steel and iron city also continue to be present in the river water today: pollutants can still be found in the water from the steel plants. Replacing old lead pipes is a lengthy endeavor, and it is estimated to take more than 10 years, costing more than $400 million — resulting in the city looking for faster and more efficient short-term solutions.
          </p>
        </div>

        <div id="brainstorming">
          <h3>Brainstorming and Mess-Mapping</h3>
          <div className="pics">
            <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
            <img src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
            <img src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
          </div>
        </div>

        <div id="vdesign">
          <h2>Visual Design</h2>
          <div className="pics">
            <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
            <img src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
          </div>
        </div>

        <div id="bRow">
          <div className="lCol">
            <div>
              <h3>Parts of the Problem: Root Causes</h3>
              <img src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
            </div>
            <div>
              <h3>Proposed Interventions</h3>
              <img src={photos[7].src} alt="work" onClick={() => openLightbox(7)} />
            </div>
          </div>

          <div className="rCol">
            <h3>Feedback Loops</h3>
            <img src={photos[8].src} alt="work" onClick={() => openLightbox(8)} />
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

export default PGHWaterQuality;
