import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Error = () => {

    const Wrapper = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        padding: 3rem 0;

        img{
            width: 50rem; height: 50rem;
        }

        a{
            text-decoration: none;

            button{
                width: 10rem;
                color: ${({ theme }) => theme.colors.white};
                border: none;
                outline: none;
                background-color: ${({theme}) => theme.colors.footerBg};
                padding: 0.6rem 0.9rem;
                font-size: 1.8rem;
                border-radius: 0.1rem;
                box-shadow: rgba(0,0,0,0.02) 0 0.1rem 0.3rem 0, rgba(27, 31, 35, 0.15) 0 0 0 0.1rem;
                cursor: pointer;
                transition: 0.3s all;

                &:hover{
                transform: translateY(-0.4rem)
                }
            }
        }
    `

    return (
        <Wrapper>
            <img src="images/error.png" alt="error" />
            <NavLink to="/">
                <button>GO BACK</button>
            </NavLink>
        </Wrapper>
    )
}

export default Error