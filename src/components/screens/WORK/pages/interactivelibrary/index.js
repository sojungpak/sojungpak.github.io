/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'Interactive Library',
  tags: ['Exhibit'],
  task: 'Design a spatial + interactive intervention proposing a holistic experience for multiple people to focus, explore, and encounter within the Hunt Library as an open place of information. The main question is, "Why come to a physical library?"',
  timeline: {
    duration: '3 Weeks',
    time: '(Spring 2022)',
  },
  collaborators: ['Individual'],
  skills: ['3D Modeling', 'Experience Design', 'Interaction Design', 'Lo-Fi Prototyping', 'Storyboarding'],
  programs: ['Physical Prototyping', 'Rhino'],
  process: 'https://medium.com/@sojungp/interactive-library-49f7ad8dbf5c',
};

const InteractiveLibrary = (props) => {
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

      <div id="interactivelibraryWork">
        <h2>Final Exhibit</h2>

        <div id="exhibitRow" className="row">
          <img src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />
          <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
          <img src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
        </div>

        <h2>Initial Research</h2>
        <div id="initialRes">
          <div id="interviews">
            <h3>Interviews</h3>
            <p>At the Hunt Library, I interviewed students and librarians to understand what the current space is doing well, as well as what it is lacking. Based on the interviews, I was able to narrow down considerations based on these key insights:</p>
            <ul>
              <li>creating a “welcoming” space that invites people to come in</li>
              <ul>
                <li>windows to allow people to see the space from outside and attract them in</li>
                <li>natural lighting for ambience</li>
                <li>comfort, openness</li>
              </ul>
              <li>most people come here to study or do research, and usually alone</li>
              <ul>
                <li>larger group settings should be focused on a classroom space for learning</li>
              </ul>
              <li>provide both digital and physical interactions with books</li>
              <li>arrangement of books makes it difficult to know where to find books, people don&apos;t seem to browse much either</li>
              <li>info desk should be in a centralized location</li>
            </ul>
          </div>
          <div id="quotes">
            <p>“Do you prefer to <b>search digitally or physically?</b>”</p>
            <p>“Have you ever <b>browsed</b> or <b>checked out a book</b> in the library?”</p>
          </div>

        </div>

        <h2>Final Floorplan</h2>
        <div id="floorplans" className="row">
          <img src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
          <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
        </div>

        <h2>Interaction</h2>
        <div className="interactionRow">
          <img src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
          <div className="text">
            <h3>Vending Machine Pad</h3>
            <p>I wanted to create a space that utilizes the <b>digital interface</b> but still facilitates a <b>physical interaction with the book.</b> Many students choose to get their books online because it is easier than physically navigating the space, not because they don&pos;t like physical books. I also wanted to utilize the CMU ID card as a way to interact and provide access to things. I further considered the vending machine as a way to:</p>
            <ul>
              <li>Redesign the librarian&pos;s role: curate each collection (per department librarian) for each vending machine pod</li>
              <li>Interactive element between readers and librarians (facilitating communication)</li>
            </ul>
          </div>
        </div>

        <div className="interactionRow">
          <img src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
          <div className="text">
            <h3>Navigation</h3>
            <p>For the navigation, I wanted to implement a similar technology to Delta&pos;s Parallel Reality experience, using a lighting system where students will be directed toward pods through a light that only they can see.</p>
            <ul>
              <li>CMU ID will establish the identity and position of the user so that their navigation experience is personalized and only they can see it.</li>
              <li>Glass on the pod will have the display built into it, so that the emitted light will be from the surface of the pod</li>
              <li>Digital interface will be built into the glass, so it can be activated from anywhere on the glass</li>
              <li>When not activated, it just remains idle like a display of books</li>
            </ul>
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

export default InteractiveLibrary;
