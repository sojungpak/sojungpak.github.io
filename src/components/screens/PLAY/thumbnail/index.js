import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Thumbnail = (props) => {
  return (
    <div className={props.mobile ? 'thumbnailM' : 'thumbnail'}>
      <NavLink to={`/play/${props.data.path}`}>

        <div className="imgZoom">
          <img src={props.data.image} alt="thumbnail" />
        </div>

        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>

      </NavLink>
    </div>
  );
};

export default Thumbnail;
