/* eslint-disable max-len */
import React from 'react';
import Header from '../header';
import './style.scss';

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
  return (
    <div className={props.mobile ? 'workPageM' : 'workPage'}>
      <Header data={headerData} mobile={props.mobile} />
      <p>Hello</p>
    </div>
  );
};

export default PGHWaterQuality;
