/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default Typography;
