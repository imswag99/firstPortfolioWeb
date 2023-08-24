import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Nav = styled.nav`
    .menuBtn{
      display: none;
    }

    .list{
      width: auto; height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
    }

    .list li{
      list-style: none;

       button{
        display: none;
       }

      .navLink{
        color: ${({ theme }) => theme.colors.heading};
        text-decoration: none;
        font-size: 1.5rem;
        text-transform: uppercase;
        transition: 0.2s all; 

        &:hover, &:active{
          color: ${({ theme }) => theme.colors.btn}
        }
      }
    } 


    @media (max-width : ${({ theme }) => theme.media.mobile}){
        .menuBtn{
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          display: inline-block;
        }

        .menu{
          font-size: 3rem;
        }

        .list{
          width: 100vw; height: 100vh;
          background: pink;
          display: none;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
          ${'' /* transform: translateX(100%); */}
        }

        .active{
          display: flex;
        }

        .list li{
          .navLink{
            font-size: 3rem;
          }

          button{
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            transform: translate(15rem, -15rem);
            display: block;
          }

          .close{
            font-size: 4rem;
          }
        } 
    }

  `

const Navbar = ({ menu }) => {

  const [isVisible, setIsVisible] = useState(menu);

  return (
    <Nav>
      <button className="menuBtn" onClick={() => setIsVisible(true)}><MenuIcon className="menu" /></button>
      <div className="menu">
        <ul className={isVisible ? "list active" : "list"}>
          <li><button onClick={() => setIsVisible(false)}><CloseIcon className="close" /></button></li>
          <li>
            <NavLink className="navLink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

    </Nav>
  )
}

export default Navbar;