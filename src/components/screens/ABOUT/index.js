/* eslint-disable max-len */
import React from 'react';
import './style.scss';

import about1 from '../../../assets/about/about1.jpeg';
import about2 from '../../../assets/about/about2.jpeg';

const AboutImages = (props) => {
  return (
    <div id={props.mobile ? 'aboutImagesM' : 'aboutImages'}>
      <img src={about1} alt="about1" />
      <img src={about2} alt="about2" />
    </div>
  );
};

const About = (props) => {
  return (
    <div id={props.mobile ? 'aboutM' : 'about'}>

      {props.mobile ? null : <AboutImages mobile={false} />}

      <div id={props.mobile ? 'aboutTextM' : 'aboutText'}>
        <h2>Thanks for stopping by :D</h2>
        <p>
          I&apos;m Sojung, a sophomore @ CMU from Northern VA. I&apos;m interested in learning about human behavior, social relationships, and culture to guide design thinking. I like to use storytelling as a tool to create special and immersive experiences. Let&apos;s talk about disruptive design and how design can be used to affect human behavior!
        </p>
        <p>
          When I&apos;m not working, you can probably find me watching the latest dystopian and thriller movies, debating philosophical topics with friends at the nearest Panera, and searching for the latest matcha flavored eats. Currently, I’m trying to visit every cafe in Pittsburgh. My current favorite is Arriviste Coffee Bar in Shadyside. Try their Ube Latte :&gt;
        </p>
        <p>
          Talk to me at <a target="_blank" rel="noopener noreferrer" href="mailto:sojungpak21@gmail.com">sojungp@andrew.cmu.edu!</a>
        </p>

        <a
          id="resume"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1fWfX8o_NnWd9EoA7_xSlos4yZSVl_1QG/view"
        >
          Resume
        </a>
      </div>

      {props.mobile ? <AboutImages mobile /> : null}
    </div>
  );
};

export default About;
