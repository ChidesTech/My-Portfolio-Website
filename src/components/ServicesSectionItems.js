import React from 'react';
import {MdCode} from "react-icons/md";

import Ptext from './PText';
import styled from "styled-components" ;


const ServiceSectionStyle = styled.div`
   text-align: center;
   .services-icon{
       svg{
           width: 3rem;
       }
   }
   .services-title{
       font-size: 2.5rem;
       font-family: "Montserrat SemiBold";

   }
   .para{
      margin-top: 2rem;

   }
`;

const ServicesSectionItems = ({
    icon = <MdCode/>, title="Web Development",
    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora illum, voluptate beatae aperiam in."
}) => {
    return (
      <ServiceSectionStyle>
      <div className="services-icon">{icon}  </div>
<div className="services-title">{title}<Ptext>{desc}</Ptext></div>
       
      </ServiceSectionStyle>
    );
  }
  
  
  export default ServicesSectionItems;