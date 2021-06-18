import React from 'react';
import styled from "styled-components";

const PtextStyle = styled.div`
max-width: 500px;
    margin: 0 auto;
    font-size: 1rem;
     line-height: 2rem;
     @media only screen and (max-width:768px) {
         font-size: 1rem;
         
     }
`

const Ptext = (props) => {
    return <PtextStyle className="para">
      <h1>{props.children}</h1>
       
      </PtextStyle>
      
    
  }
  
  
  export default Ptext;