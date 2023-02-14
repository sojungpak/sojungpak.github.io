/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default PolkaDotPoisonFrogs;
