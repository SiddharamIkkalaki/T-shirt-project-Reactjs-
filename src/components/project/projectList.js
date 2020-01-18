import React from 'react';

const ProjectList=({design})=>{
    console.log("********", design)
    return(
        <div className="item text-center">
           <div className="card card-body">
           <img className="img-fluid" src= {`https://res.cloudinary.com/dkkgmzpqd/image/upload/v154517305/T-shirt%20Images/${design.tshirtcolor}`}
           alt = "t-shirt" />
           <p>{design.name}</p>
           <button className="btn btn-primary btn-sm">View Project</button>
           </div>        
        </div>
    )
}

export default ProjectList;