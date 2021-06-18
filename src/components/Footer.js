import React from 'react';
import styled from "styled-components";


const FooterStyles = styled.div`

.center{
    text-align: center;
    margin-bottom: 1rem; 
}


`;
const Footer = () => {
    return (
      <FooterStyles>
      <div className="center">
<h1>By ChidesTechnologies@2021</h1>
</div>

       
      </FooterStyles>
    );
  }
  
  
  export default Footer;