import React from 'react';
import Ptext from './PText';
import styled from "styled-components";

const AboutItemStyles= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 3rem;
gap:1rem;
position:relative;
.title{
    font-size: 2.4rem;
}
.items{
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left:18rem;

}
.item{
    background-color: navy;
    padding: 1rem;
    border-radius: 8px;

}
@media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    gap:1rem;
    .items{
        position: initial;
        gap:1rem
    }
    .title{font-size: 2rem}
}

`

const AboutInfoItem = ({
    title="The title",
    items=["Yes", "No", 'k']
}) => {
    return (
      <AboutItemStyles>
      <h1 className="title">{title}</h1>
       <div className="items">
           {
           items.map((item, index)=>{
              return <div key={index} className="item">
                   <Ptext>{item}</Ptext>
               </div>
           })
           }</div>
           
      </AboutItemStyles>
    );
  }
  
  
  export default AboutInfoItem;