import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';



const Wrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 0 0 0;

    .overlap{
      width: 70%; height: 10rem;
      background-color: ${({ theme }) => theme.colors.overlap};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      border-radius: 0.5rem;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      transform: translateY(4.5rem);
    }

    .footer_main, .copyright{
      width: 100%; height: 20rem;
      background-color: ${({ theme }) => theme.colors.footerBg};
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 0.2rem solid #fff;

      .footer_sub, .tnc{
        height: 10rem;
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 4rem;

        h3{
          font-size: 1.2rem;
        }

        p{
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.white};
        }

        input{
          background-color: ${({ theme }) => theme.colors.white};
          border: none;
          outline: none;
          padding: 0.5rem 0.3rem;
          border-radius: 0.2rem; 
        }

        .socials{
          display: flex;
          justify-content: space-around;
          gap: 0.5rem;
        }
      }
    }

    .copyright{
      height: auto;
      border-bottom: none;

      h3{
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.2rem;
      }
    }

    a{
      text-decoration: none;

      button{
          width: 10rem;
          color: ${({ theme }) => theme.colors.white};
          border: none;
          outline: none;
          background-color: ${({ theme }) => theme.colors.footerBtn};
          padding: 0.6rem 0.9rem;
          font-size: 1.2rem;
          border-radius: 0.1rem;
          box-shadow: rgba(0,0,0,0.02) 0 0.1rem 0.3rem 0, rgba(27, 31, 35, 0.15) 0 0 0 0.1rem;
          cursor: pointer;
          transition: 0.3s all;

          &:hover{
          transform: translateY(-0.4rem)
          }
      }
    }

    @media (max-width : ${({theme}) => theme.media.mobile}){
      .overlap{
        width: 90%;
      }

      .footer_main{
        width: 100%; height: auto;
        flex-direction: column;
        padding-top: 4rem;

        .footer_sub{
          width: 90%; height: auto;
          flex-direction: row;
          margin-top: 2rem;
        }

        p{
          transform: translateY(-1.2rem)
        }
      }
    }
  `

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="overlap">
        <p>Ready to give us a chance?</p>
        <NavLink to="/contact">
          <button>Get Started</button>
        </NavLink>
      </div>

      <div className="footer_main">
        <div className="footer_sub">
          <h3>juSTice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="footer_sub">
          <h3>Subscibe for more updates</h3>
          <input type="text" placeholder="Enter your email" />
          <NavLink>
            <button>SUBSCRIBE</button>
          </NavLink>
        </div>

        <div className="footer_sub">
          <h3>Follow us</h3>
          <div className="socials">
            <FacebookIcon /><InstagramIcon /><TwitterIcon />
          </div>
        </div>

        <div className="footer_sub">
          <h3>Call us</h3>
          <p><PhoneIcon /> +91 1234567890</p>
        </div>
      </div>
      <div className="copyright">
        <h3>©{year}juSTice. All Rights Reserved</h3>
        <div className="tnc">
          <h3>PRIVACY POLICY</h3>
          <h3>TERMS AND CONDITIONS</h3>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer;