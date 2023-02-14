/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default CACI;
