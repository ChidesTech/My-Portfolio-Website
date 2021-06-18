import React from 'react';
import Button from '../components/Button';
import ContactJumbo from '../components/ContactJumbo';
import Footer from '../components/Footer';
import Ptext from '../components/PText';
import AboutImg from "../assets/images/MyPhoto.jpg";
import styled from "styled-components";
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyle = styled.div`
padding: 20rem 0 1rem 0;
.top-section{
  display: flex;
  align-items: center;
  justify-content: center;
}
.left{
  flex:3
}
.right{
  flex:2
}
.about-subheading{
  font-size: 2.2rem;
  margin-bottom: 2rem
}
.about-heading{
  font-size: 3.6rem;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
  
}
.about-info{
  margin-bottom: 4rem;
  .para{
    max-width: 100%
  }
}
.right{
  border: 2px solid var(--gray-1)
}
.about-info-items{
  margin-top: 10rem;
}
.about-info-item{
  margin-bottom: 10rem;
}
.about-info-heading{
  font-size:3.6rem;
  margin-bottom:4rem;
  margin-top:10rem;
}
@media only screen and (max-width: 768px){
  padding: 10rem 0 1rem 0;
  .about-info-heading{
    font-size:3rem;
  }
  .top-section{
    flex-direction: column;
    gap:5rem
  }
  .about-subheading{
    font-size: 1.8rem;
  }
  .about-heading{
    font-size: 2.8rem;
  }
  .about-info-heading{
    font-size:3rem;
  }
}
`


const About = () => {
    return (
      <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about-subheading">
              Hi I am Desmond Chinwendu Nwosu
            </p>
            <h2 className="about-heading">
              A WEB AND MOBILE APPLICATIONS DEVELOPER
            </h2>
            <div className="about-info">
            <Ptext>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae dolores! Ratione architecto id obcaecati voluptatibus laborum error quibusdam, atque tenetur? Recusandae, voluptatum incidunt repudiandae eius molestias non quos minus delectus? Voluptates, ipsum unde. Itaque!
              <br/><br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita ratione deserunt nobis temporibus repellendus ipsum atque blanditiis quo quam, quis nesciunt. Laudantium nisi perferendis optio consequatur ipsam provident, necessitatibus rerum natus? Obcaecati, reprehenderit officia illo possimus aliquid dolor!
              <br/><br/>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, voluptate, similique blanditiis sint provident qui voluptatibus aliquid earum dicta est aspernatur enim repellendus eos fugiat unde ad perspiciatis. Eum!
            </Ptext>

            </div>
            <Button btnText="Download CV" btnLink="#"/>
          </div>
          <div className="right">
            <img src={AboutImg} alt=""/>
          </div>
        </div>
        <div className="about-info-items">
        <div className="about-info-item">
          <h1 className="about-info-heading">Education</h1>
          <AboutInfoItem title="University" items={["Nnamdi Azikiwe University Awka, Nigeria"]}/>
          <AboutInfoItem title="Course" items={["Mechanical Engineering, (B.Eng)"]}/>
          <h1 className="about-info-heading">Skills</h1>
          <AboutInfoItem title="Frontend" items={["HTML", "CSS", "JAVASCRIPT", "REACT"]}/>
          <AboutInfoItem title="Backend" items={["NODEJS", "EXPRESS", "PHP"]}/>
          <AboutInfoItem title="Mobile App" items={["REACT NATIVE"]}/>
          <AboutInfoItem title="Database" items={["MONGODB", "MYSQL"]}/>
          </div>
        </div>
      </div>
      <ContactJumbo />
      <Footer />
      </AboutPageStyle>
    );
  }
  
  
  export default About;