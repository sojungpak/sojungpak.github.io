import React from 'react';
import './style.scss';

const Header = (props) => {
  return (
    <div className={props.mobile ? 'headerM' : 'header'}>

      <div>
        <h2>{props.data.name}</h2>
        <div className="tags">
          {props.data.tags.map((tag) => <p>{tag}</p>)}
        </div>
      </div>

      <div className="task">
        <h3>Task</h3>
        <p>{props.data.task}</p>
      </div>

      <div className="descriptionRow">
        <div className="description">
          <h4>Timeline</h4>
          <p>{props.data.timeline.duration}</p>
          <p>{props.data.timeline.time}</p>
        </div>

        <div className="description">
          <h4>Collaborators</h4>
          {props.data.collaborators.map((collaborator) => <p>{collaborator}</p>)}
        </div>

        <div className="description">
          <h4>Skills</h4>
          {props.data.skills.map((skill) => <p>{skill}</p>)}
        </div>

        <div className="description">
          <h4>Programs</h4>
          {props.data.programs.map((program) => <p>{program}</p>)}
        </div>
      </div>

      <div className="process">
        <p>Link to full process below ⇩</p>
        <a
          className="processButton"
          target="_blank"
          rel="noopener noreferrer"
          href={props.data.process}
        >
          Process
        </a>
      </div>
    </div>
  );
};

export default Header;
