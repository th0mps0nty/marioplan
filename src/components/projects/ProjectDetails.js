import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet accusantium, porro debitis a, consectetur beatae sit dolorem enim velit totam repudiandae? Doloribus perferendis unde cum atque vero eligendi non aspernatur?</p>
            </div>
            <div className="card-action grey-lighten-4 grey-text">
                <div>Posted by Tyler Thompson</div>
                <div>24th September, 4pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
