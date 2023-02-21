import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Thumbnail = (props) => {
  return (
    <div className={props.mobile ? 'thumbnailM' : 'thumbnail'}>
      <NavLink to={`/work/${props.data.path}`}>

        <div className="imgZoom">
          <img src={props.data.image} alt="thumbnail" loading="eager" />
        </div>

        <div className="titleRow">
          <h2>{props.data.name}</h2>
          <div className="tags">
            {props.data.tags.map((tag) => {
              return (
                <p key={tag}>{tag}</p>
              );
            })}
          </div>
        </div>

        <p>{props.data.description}</p>

      </NavLink>
    </div>
  );
};

export default Thumbnail;
