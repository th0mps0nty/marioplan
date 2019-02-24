import React from 'react';
import projectReducer from '../../redux/reducers/projectReducer';

const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>{project.content}</p>
      <p className="grey-text">20th September 4pm</p>
    </div>
  </div>
);

export default ProjectSummary;
