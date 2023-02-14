/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default MireLee;
