/* eslint-disable max-len */
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Header from '../header';
import './style.scss';
import photos from './photos';

const headerData = {
  name: 'NOMnom',
  tags: ['UI/UX', 'App'],
  task: 'Design a persuasive artifact to persuade people about an issue you care about—Nomnom! targets an existing gap in the digital solutions to food-tracking. By leveraging gamification and rewards-based methods of tracking and incentivizing progress, we reframe picky-eating as a collaborative opportunity for learning and growth for parents and children. ',
  timeline: {
    duration: '2 Weeks',
    time: '(Spring 2022)',
  },
  collaborators: ['Anna Chuenrudeemol', 'Dion Lewis'],
  skills: ['UI Design', 'UX Research', 'Interaction Design', 'App Prototyping'],
  programs: ['Figma'],
};

const NOMnom = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
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

      <div id="nomnomWork">
        <h2>Final App</h2>
        <p>Click
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.figma.com/proto/StoDzacVhBmKU2PUzHxq5L/Nom!-(Copy)?page-id=0%3A1&node-id=161%3A4919&viewport=698%2C-891%2C0.24&scaling=scale-down&starting-point-node-id=161%3A4919&show-proto-sidebar=1"
          >here
          </a>
          to access the app virtually in Figma
        </p>
        <iframe className="short" width="320" height="560" src="https://www.youtube.com/embed/dkBHL6nArSc" title="Nomnom" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        <h2>Problem Space</h2>
        <h3>Picky Eating</h3>
        <b>How might we persuade people to try out new foods and eat foods they don&apos;t like?</b>
        <p>The topic we elected to pursue is persuading children to try new and unfamiliar foods, especially in the case of ingredients they don&apos;t think they like. We felt like food is a fairly universal space to practice persuasion, especially in the case of picky-eaters, moreover working with a younger audience in mind raises the stakes and is more personally compelling given the importance of establishing healthy food-based habits early in life. To combat this issue, we would like to embrace a non-confrontational method to encourage trying new foods, rather than forcing foods on them. By “gamifying” food and incentivizing children to play with their meals rather than forcing them to consume things, children will be able to have an emotional connection by gaining positive memories about the food.</p>

        <h2>Research</h2>
        <div className="row">
          <div className="col">
            <img src={photos[0].src} alt="work" onClick={() => openLightbox(0)} />
            <img src={photos[1].src} alt="work" onClick={() => openLightbox(1)} />
          </div>
          <div className="col">
            <img src={photos[2].src} alt="work" onClick={() => openLightbox(2)} />
          </div>
          <div className="col">
            <img src={photos[3].src} alt="work" onClick={() => openLightbox(3)} />
            <img src={photos[4].src} alt="work" onClick={() => openLightbox(4)} />
          </div>
        </div>

        <p>From these findings, we were able to ideate ideas for effective solutions that addressed a current gap in the market:</p>
        <ul id="list">
          <li>Similar to a Pokédex, creating a system to organize and track foods that offers a <b>gamified</b> motivation</li>
          <li>Recommend similar foods/branches</li>
          <li><b>Educational tool</b> about nutrition</li>
          <li>Parent + Kid modeling</li>
          <li>Give children control over their food journey</li>
          <li><b>Eliminating the notion</b> of parents “fixing” their children, <b>reframe</b> to be collaborative problem-solving</li>
          <li>Instead of food-based rewards, offer interfaced-based rewards</li>
        </ul>

        <h2>Design Solution</h2>
        <h3>Wireframes</h3>
        <div className="row">
          <img id="screens" src={photos[5].src} alt="work" onClick={() => openLightbox(5)} />
          <img id="logos" src={photos[6].src} alt="work" onClick={() => openLightbox(6)} />
        </div>

        <div className="row mockups">
          <div className="row">
            <img src={photos[7].src} alt="work" onClick={() => openLightbox(7)} />
            <div className="text">
              <h2>Daily Feed</h2>
              <p>A personalized overview of recipes for trying new foods. The recipes shown are personally catered depending on where you are in your food journey.</p>
            </div>
          </div>
          <div className="row">
            <img src={photos[8].src} alt="work" onClick={() => openLightbox(8)} />
            <div className="text">
              <h2>Food Map</h2>
              <p>A map of your food journey with branching paths of more challenging foods in a gamified layout, similar to a game&apos;s skill tree. </p>
            </div>
          </div>
        </div>

        <div className="row mockups">
          <div className="row">
            <img src={photos[9].src} alt="work" onClick={() => openLightbox(9)} />
            <div className="text">
              <h2>FoodDex</h2>
              <p>Catalog of foods with progress rings that features a star (interface-based motivators) when foods are fully accomplished.</p>
            </div>
          </div>
          <div className="row">
            <img src={photos[10].src} alt="work" onClick={() => openLightbox(10)} />
            <div className="text">
              <h2>Home Page</h2>
              <p>Collaborative page for the parent and child to personalize their profile, as well as view statistics of their overall food journey. </p>
            </div>
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

export default NOMnom;
