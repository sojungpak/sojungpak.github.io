/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default ARTour;
