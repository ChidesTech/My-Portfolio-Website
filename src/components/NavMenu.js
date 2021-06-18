import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {MdClose,MdMenu} from "react-icons/md"
import { useState } from "react";
import navImg from "../assets/images/HeroImage.jpg"

const MenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left:0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    .navImg{
        font-size: 2rem;
        height: 8rem;
        width: 8rem;
        border-radius:50%;
        padding:0;
        background: transparent;
       
       
    }
    .home:hover{
        
        background: transparent;
       
    }
     
   ul{
       
       max-width: 1200px;
       margin: 0 auto;
       width: 90%;
       text-align: center;
      
       li{
        
        display: inline-block;
        border-radius: 8px;
        transition: .3 ease  background-color;
       
        &:hover{
        background-color: navy;

        
          }
       }
       a{
        display: inline-block;
        font-family: "Roboto Mono";
        padding: 1rem 2rem;
        font-size: 2rem;
        color: #998a8a;
        outline: none;
    }
    a:hover{
        color: white;
    }
    .active{
        color: white;
        
        
        

    }
   }

   .mobile-menu-icon{
       position: absolute;
       right: 1rem;
       top: 1rem;
       width:4rem;
       cursor:pointer;
        display: none;
       outline: none;
       *{
           pointer-events: none;
       }
   }

   .closeNavIcon{
       display: none
   }

   @media only screen and (max-width: 768px){
       padding:0;
       
        .hide-item{
         transform : translateY(calc(-100% - var(--top)));
        
       }
       .mobile-menu-icon{

           display: block;
        }
  

        .navItems{
            --top: 1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon{
                display:block;
                width:3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                     pointer-events: none; 
                }

            }
            li{
                display:block;
                margin-bottom: 1rem
            }
        }
     
   }
`

const NavMenu = () =>{
    const [showNav, setShowNav] = useState(false)
    return <MenuStyles>
        <div className="mobile-menu-icon" onClick={()=>setShowNav(!showNav)}
        role="button" onKeyDown={()=>setShowNav(!showNav)}
        tabIndex={0}>
        <MdMenu/>
        </div>
     <ul className={!showNav? "navItems hide-item" : "navItems"}>
        <div className="closeNavIcon" onClick={()=>setShowNav(!showNav)}
        role="button" onKeyDown={()=>setShowNav(!showNav)}
        tabIndex={0}
        > 
        <MdClose/>
         </div>
         <div onClick={()=>setShowNav(!showNav)}
        role="button" onKeyDown={()=>setShowNav(!showNav)}
        tabIndex={0}>
        <li className="home" >  <NavLink  to="/" exact><img className="navImg" src={navImg} alt=""/></NavLink></li>
        <li> <NavLink to="/" exact> Home</NavLink></li>
        <li> <NavLink to="/about"> About</NavLink></li>
        <li> <NavLink to="/projects">Projects</NavLink></li>
        <li> <NavLink to="/contact"> Contact</NavLink></li>
        </div>
    </ul>
    

          </MenuStyles>
}

export default NavMenu;