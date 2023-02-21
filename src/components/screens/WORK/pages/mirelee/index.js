/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'Mire Lee Exhibit',
  tags: ['Exhibit'],
  task: 'Create a temporary (3-4 week) exhibition featuring Mire Lee, who is currently on exhibit at the Carnegie Museum of Art. Consider how technology can augment content, increase learning and/or make the museum experience more interactive.',
  timeline: {
    duration: '4 Weeks',
    time: '(Fall 2022)',
  },
  collaborators: ['Individual'],
  skills: ['3D Modeling', 'Experience Design', 'Interaction Design', 'Lo-Fi Prototyping', 'Storyboarding'],
  programs: ['Physical Prototyping', 'Adobe PS/Ai/AE', 'SketchUp'],
  process: 'https://medium.com/@sojungp/hybrid-exhibit-environments-91ae22d6568a',
};

const MireLee = (props) => {
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

      <div id="mireleeWork">
        <h2>Final Exhibit</h2>
        <p>Click
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.sketchup.com/share/tc/northAmerica/8YqhzCQWzH4?stoken=jREBArPMWAKkWL39ABkpkpQ9uOU5gueH2kE42qY7pJP1aiYk-GK18X088NSFSV0B&source=web"
          >here
          </a>
          to access the exhibition virtually in SketchUp
        </p>

        <div className="row">
          <img src={photos[0].thumb} alt="work" onClick={() => openLightbox(0)} />
          <img src={photos[1].thumb} alt="work" onClick={() => openLightbox(1)} />
          <img src={photos[2].thumb} alt="work" onClick={() => openLightbox(2)} />
        </div>

        <h2>Initial Research</h2>
        <div id="initialRes">
          <div id="section1">
            <div className="top">
              <h3>The Artist</h3>
              <p>Visiting the CMOA, I saw Mire Lee’s sculpture “Untitled (My Pittsburgh Sculpture)” on display as part of the Carnegie International exhibit. Her kinetic sculptures reinterpret the living (internal systems of the body) through mechanical movements and materials as a way to display the anti-aesthetic. She explores themes of pain and vorarephilia, creating a metaphor for consuming the violence and pain we are confronted by.</p>
            </div>
            <div className="bottom">
              <img id="img1" src={photos[3].thumb} alt="work" onClick={() => openLightbox(3)} />
              <img id="img2" src={photos[4].thumb} alt="work" onClick={() => openLightbox(4)} />
            </div>
          </div>

          <div id="section2">
            <div className="top">
              <h3>The Client</h3>
              <p>The exhibition will be temporarily installed within the first floor of CMU’s Miller ICA. The goal is to both increase awareness of the client’s exhibitions (CMOA) to the general public as well as attract more CMU students, faculty and staff to the museum.</p>
              <p>For this reason, I visited the Miller ICA and observed the existing space for consideration as I designed the layout.</p>
            </div>
            <div className="bottom">
              <img src={photos[5].thumb} alt="work" onClick={() => openLightbox(5)} />
            </div>
          </div>

          <div id="section3">
            <div className="top">
              <h3>Inspirations</h3>
              <p className="list">☆ Immersive Horror (Haunted Houses)</p>
              <p className="list">☆ Jason Yuan’s Kinetic Typefaces</p>
              <p className="list">☆ Claustrophobic Spaces</p>
              <p className="list">☆ and of course, Mire Lee</p>
            </div>

            <div className="bottom">
              <h3>Moodboard</h3>
              <img src={photos[6].thumb} alt="work" onClick={() => openLightbox(6)} />
            </div>
          </div>
        </div>

        <h2>Layout</h2>
        <h3>Parti Diagram</h3>
        <div className="row">
          <img src={photos[7].thumb} alt="work" onClick={() => openLightbox(7)} />
          <img src={photos[8].thumb} alt="work" onClick={() => openLightbox(8)} />
          <img src={photos[9].thumb} alt="work" onClick={() => openLightbox(9)} />
        </div>

        <h2>Interactions</h2>
        <h3>Lo-Fi Prototype (LittleBits)</h3>
        <div id="interactions" className="row">
          <img src={photos[10].thumb} alt="work" onClick={() => openLightbox(10)} />
          <iframe className="video" src="https://www.youtube.com/embed/tFo6o18lJqk" title="Little Bits" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>

        <div className="interactionRow">
          <iframe className="video" src="https://www.youtube.com/embed/EVQcDAtg1Gw" title="Interaction 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div className="text">
            <h2>Interaction 1</h2>
            <h3>Introduction to the Space</h3>
            <p>Given the limitation of the scale of her work, I couldn’t physically bring in her work to view in my exhibit. Instead, I opted to create an interaction in which visitors could see and hear her older larger-scale installations. A pressure sensor is used to detect the presence of individuals, prompting the screen to start/stop playing the video. </p>
          </div>
        </div>

        <div id="midRow" className="interactionRow">
          <div className="text">
            <h2>Interaction 2</h2>
            <h3>Materials: Sound and Movement</h3>
            <p>Vore has to do with a desire for unification with another being, which inspired this space where it turns from an individual to group experience. Also acts as a transition to the next area where “vore” is physically experienced, in which visitors feel as if they are being consumed by the environment. Videos taken from “Carriers” (2020). </p>
          </div>
          <iframe className="video" src="https://www.youtube.com/embed/pmvBRiCuz-4" title="Interaction 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>

        <div className="interactionRow">
          <iframe className="video" src="https://www.youtube.com/embed/N8FiE7pOHlw" title="Interaction 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div className="text">
            <h2>Interaction 3</h2>
            <h3>Vorarephilia</h3>
            <p>Changes in wall, lighting, sound, and temperature combine to make you feel like you are being consumed. Encourages learning of the concept of vore to those that are unfamiliar. Acts on fears such as darkness (“walking into the void” and claustrophobia to elevate feelings as you interact with the space.</p>
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

export default MireLee;
