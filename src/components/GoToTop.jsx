import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from 'styled-components';

const GoToTop = () => {

    const Scroll = styled.button`
        background-color: ${({ theme }) => theme.colors.btn};
        padding: 0.5rem;
        border: none;
        outline: none;
        border-radius: 50%;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        position: fixed;
        bottom: 4rem;
        right: 4rem;
        z-index: 10;

        .arrow{
            font-size: 4rem;
            color: ${({ theme }) => theme.colors.white};
        }
    `


    // onclick scroll function
    const goTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }


    // visibility of scroll to top btn
    const [isVisible, setIsVisible] = useState(false);


    const listenToScroll = () => {
        let heightToHide = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        winScroll > heightToHide ? setIsVisible(true) : setIsVisible(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    })


  return (
    <>
        {
            isVisible && (
                <Scroll onClick={goTop}><ArrowUpwardIcon className='arrow' /></Scroll>
            )
        }
    </>
  )
}

export default GoToTop;