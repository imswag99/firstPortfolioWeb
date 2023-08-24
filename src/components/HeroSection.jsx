import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useGlobalContext } from './Context';

const Section = styled.section`
      width: 100%; height: 40rem;
      ${'' /* background-color: red; */}
      display: flex;

    .heroInfo{
      width: 50%;
      ${'' /* background-color: blue; */}
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding-left: 15%;

      h1{
        width: 60%
      }
    }

    .heroImg{
      width: 50%;
      ${'' /* background-color: green; */}
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 50%; height: 90%;
      }
    }

    @media (max-width : ${({theme}) => theme.media.mobile}){
      height: auto;
      flex-direction: column;

      .heroInfo{
        width: 100%;
        text-align: center;
        align-items: center;
        padding-left: 0;

        h1{
          width: 100%;
        }
      }

      .heroImg{
        width: 100%;
      }
  `;

const HeroSection = ({ btnBg }) => {

    const {name, image} = useGlobalContext();

    const Button = styled.button`
    width: 10rem;
    margin-top : 2rem;
    border: none;
    outline: none;
    background-color: ${btnBg};
    padding: 0.6rem 0.9rem;
    font-size: 1.8rem;
    border-radius: 0.1rem;
    box-shadow: rgba(0,0,0,0.02) 0 0.1rem 0.3rem 0, rgba(27, 31, 35, 0.15) 0 0 0 0.1rem;
    cursor: pointer;
    transition: 0.3s all;

    &:hover{
      transform: translateY(-0.4rem)
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.hr};
    }
  `

    return (
        <>
            <Section>
                <div className="heroInfo">
                    <p>THIS IS ME</p>
                    <h1>{name}</h1>
                    <h3>I am {name}. I am a full stack developer and a gamer</h3>
                    <Button><NavLink to='/contact'>HIRE ME</NavLink></Button>
                </div>

                <div className="heroImg">
                    <img src={image} alt="hero" />
                </div>
            </Section>
        </>
    )
}

export default HeroSection