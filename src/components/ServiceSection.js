import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';
import styled from "styled-components" ;
import {MdCode, MdPhonelinkSetup} from "react-icons/md";




const ServiceSectionStyle = styled.div`
padding: 10rem 0;
.services-container{
    display: flex;
    gap: 10rem;
    justify-content: center;
    margin-top: 5rem;
     
}
@media only screen and (max-width:768px){
    .services-container{
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;

         
    }
}
`
const ServiceSection = () => {
    return (
      <ServiceSectionStyle>
     <div className="container">
     <SectionTitle heading="My Services" subHeading="What I can do for you... "/>
      <div className="services-container">
          <ServicesSectionItems 
          icon={<MdCode/>} title="Web Development" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora illum, voluptate beatae aperiam in."
          />
         
          <ServicesSectionItems 
          icon={<MdPhonelinkSetup/>} title="Mobile App Development" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora illum, voluptate beatae aperiam in."
          />
         

          </div></div> 
      </ServiceSectionStyle>
    );
  }
  
  
  export default ServiceSection;