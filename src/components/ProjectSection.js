import React from 'react';
import SectionTitle from "./SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import projects from "../assets/data/projects";
import ProjectItem from './ProjectItem';
import styled from "styled-components";
import "swiper/swiper-bundle.min.css"
SwiperCore.use((Navigation)); 

const ProjectSectionStyles= styled.div`
padding: 10rem 0;
.project-items{
  display: flex;
  gap:3rem;
  margin-top: 5rem;
}

.swiper-container{
  padding-top: 8rem;
  max-width:100%

}

.swiper-button-prev,
.swiper-button-next{
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: navy;
  z-index:10;
  right: 60px;
  left: auto;
  top: 0;
  transform: translateY(50%);
   color:white;
   border-radius:8px
}

.swiper-button-next{
  right:0;
}
.swiper-button-prev::after,
.swiper-button-next::after{
  font-size: 2rem;
  font-weight: bolder;
}
@media only screen and (max-width: 768px){
  .project-items{
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .project-img{
      width:100%
    }
  }
}
`
const ProjectSection = () => {
    return (
      <ProjectSectionStyles>
          <div className="container">
   <SectionTitle heading="My Projects" subHeading="Below are some of my recent works..."/>
       <div className="project-items">
           <Swiper spaceBetween={30} slidesPerView={1} navigation
           breakpoints={
             {640:{
               //when >=640px
               slidesPerView : 1, 
             },
            768:{
              slidesPerView : 2
            },
            1200:{
              slidesPerView:3
            }
            }
           }
           >
       {projects.map((project, index)=>{
         if(index>=5) return null;
         return <SwiperSlide key={project.id}>
             <ProjectItem title={project.name}
             img={project.img} 
             desc={project.desc} 
             />

           </SwiperSlide>
         

         
       })}
           </Swiper>
       </div>
      </div>
       
      </ProjectSectionStyles>
    );
  }
  
  
  export default ProjectSection;