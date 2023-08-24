import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const MainHeader = styled.header`

    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
      height: auto;
      width: 60%;
      border-radius : 0.5rem;
    }


    @media (max-width : ${({ theme }) => theme.media.mobile}){    
      padding: 0 2rem;

      .logo{
          width: 20rem; height: 5rem;
        }
    }

`;

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

export default Header;