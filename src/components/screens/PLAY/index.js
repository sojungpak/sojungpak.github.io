import React from 'react';
import './style.scss';
import Thumbnail from './thumbnail';
import PlayItems from './play_items';

const Play = (props) => {
  return (
    <div id={props.mobile ? 'playM' : 'play'}>
      <h2 id="header">Some personal creative endeavors—I am always looking for new mediums to explore!</h2>
      <div id="thumbnails">
        {PlayItems.map((item) => {
          return (
            <Thumbnail data={item} key={item.name} mobile={props.mobile} />
          );
        })}
      </div>
    </div>
  );
};

export default Play;
