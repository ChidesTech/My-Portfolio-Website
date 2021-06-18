import React from 'react';
import { Link } from 'react-router-dom';
import ProjectImg from "../assets/images/projectImg.png"
import styled from 'styled-components';


const ProjectItemStyles = styled.div`
.project-img{
    width: 100%;
    height:400px;
    overflow:hidden;
    border-radius:12px;
    display:inline-block;
    border:3px solid white;
    img{
        height:100%;
}

}
.project-info{
    margin-top:1rem;
    background-color: transparent;
    padding:1rem;
    border-radius:12px;
    border: 1px solid white;
    

}
.project-title{
    font-size:2.2rem;
}
.project-description{
    font-size:2.2rem;
    font-family: "RobotoMono Regular";
     margin-top: 1rem;
}

@media only screen and (max-width: 768px){
    .project-img{
        height: 350px;
    }
}
`

  const ProjectItem  = ({
  img= ProjectImg, title= "Project Name", desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius iste doloribus, similique nobis error modi. Hic dignissimos nemo perspiciatis.'
}) => {
    return (
      <ProjectItemStyles>
      
      <Link to="/projects" className="project-img">
          <img src={img} alt=""/>
      </Link>
       <div className="project-info">
           <Link to="#">
            <h3 className="project-title">{title}</h3>
           </Link>
           <p className="project-desc">
               {desc}
           </p>
        </div>
      </ProjectItemStyles>
    );
  }
  
  
  export default ProjectItem ;