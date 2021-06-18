import React from 'react';
import Button from './Button';
import styled from "styled-components";
import SectionTitle from './SectionTitle';


const ContactJumboStyles = styled.div`
.center{
    text-align: center;
    margin-bottom: 10rem
   
}
.project{
    margin-bottom: 5rem
}
`;
const ContactJumbo = () => {
    return (
      <ContactJumboStyles>
      <div className="container project">
      <SectionTitle  subHeading="Have a project/offer in mind?" heading=""/>

         
      </div>
      <div className="center">

<Button btnText="Contact Me" btnLink="/contact"/>
</div>

       
      </ContactJumboStyles>
    );
  }
  
  
  export default ContactJumbo;