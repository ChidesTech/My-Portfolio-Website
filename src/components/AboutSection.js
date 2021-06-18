import React from 'react';
import PText from './PText';
import SectionTitle from './SectionTitle'; 
import Button from "./Button";
import AboutImg from "../assets/images/MyPhoto.jpg";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
padding: 10rem 0;
.container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left
}
.aboutsection-left,
.aboutsection-right{
    flex:1;
}

.section-title{
    textt-align: left;
}

.para{
    margin-top:2rem;
    margin-left: 0
}
.aboutsection-buttons{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:2rem;
    margin-top:2rem;
}

@media only screen and (max-width:950px){

    .aboutsection-left{
        flex:4;
    }
    .aboutsection-right{
        flex:2;
    }
}
@media only screen and (max-width:768px){
   .container{
       flex-direction: column
   }
    .aboutsection-left,
    .aboutsection-right{
        width:100%;
    }
    .aboutsection-right{
       margin-top: 3rem
    }
    .section-title{
        text-align: center;
    }
    .para{
        margin: 0 auto;
        margin-top: 2rem
    }
    .aboutsection-buttons{
        flex-direction:column;
        
        .button-wrapper,a{
            width:100%;
            text-align:center
        }
    }
}
`

const AboutSection = () => {
    return (
      <AboutSectionStyle>
      <div className="container">
          <div className="aboutsection-left">
          <SectionTitle
          
          subHeading="Who I am..."
           heading="About Me"
          />
          <PText>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, voluptas nobis! Corporis sapiente quod molestias? Autem ex, quaerat aperiam quis velit minima illum, porro libero voluptates perferendis eos, error alias!
          </PText>
          <div className="aboutsection-buttons">
              <Button btnLink="/projects" btnText="My Works"/>
              <Button btnLink="/about" btnText="Know More" outline/>
           </div>
          </div>
          <div className="aboutsection-right">
              <img src={AboutImg} alt=""/>
          </div>
      </div>
      </AboutSectionStyle>
    );
  }
  
  
  export default AboutSection;