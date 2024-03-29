import React from 'react';
import styled from "styled-components";

const SectionTitleStyle = styled.div`
text-align: center;
p{
    font-family: "RobotoMono Regular";
    font-size: 2rem
}
h2{
    font-family: "Montserrat Bold";
    font-size: 6rem;
    margin-top: 0.5rem;
    
}

@media only screen and (max-width: 768){
    p{
        font-size:1.2rem;

    }
    h2{
        font-size: 3.6rem
    }
}
`

const SectionTitle = ({subHeading ="This is a subheading",
    heading="This is a heading"}) => {
    return (
      <SectionTitleStyle className="section-title">
      <p>{subHeading}</p>
       <h2>{heading}</h2>
      </SectionTitleStyle>
    );
  }
  
  
  export default SectionTitle;