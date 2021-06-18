import React from 'react';
import HeroImage from "../assets/images/alan.jpg";
import Button from './Button';
import PText from './PText';
import styled from "styled-components";

const HeroStyle = styled.div`
.word{
    color: black;
    font-weight:bolder;
    font-size:3.5rem;
    line-height: 2.5rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 3.8rem
    
    
}
.hero{
    height: 100vh;
    min-height: 1000px;
    width:100%;
    text-align: center;
    display: flex;
    align-items:center;
    positon:relative;
    justify-content: center;
}
.hero__heading{
    font-size: 2rem;
    margin-bottom: 0;
    position: relative;
    span{
        display: inline-block;
        width:100%;
    }
    .hero__name{
    font-size: 7rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:var(--white);
    }
}

.hero__image{
  max-width:900px;
  width:100%;
  
  height:600px;
  margin:3rem auto;
  border-radius:500%;
}

.hero__info{
margin-top: -18rem
}

@media only screen and (max-width:768px){
    .hero{
        min-height: 750px;

    }
    .hero__heading{
        font-size:1.4rem;
        margin-bottom: -3rem;
        
.hero__name{
    font-size:4.5rem;

}
    }
    .hero__image{
        height: 300px;
    }
    .hero-info{
        margin-top: 3rem;
    }
}



`
const HeroSection = () => {
    return (
     <HeroStyle>
      <div className="hero">
      <div className="container">
           <h1 className="hero__heading">
              <span>Hi, I'm</span>
              <span className="hero__name">Desmond Chinwendu Nwosu</span>
          </h1>
         
          <div className="hero__image">
              <img src={HeroImage} alt=""/>
         
          </div>
          <div className="hero__info">
         <PText><div className="word"> I develop web and mobile applications.</div>
         </PText>
         <Button  btnlink="/projects" btnText="Check my works "
         outline={0 }
         />
         </div>
      </div>
      </div>
      </HeroStyle>
    );
  }
  
  
  export default HeroSection;