import React from "react";
import { styled } from "styled-components";

const Contact = () => {

  const Wrapper = styled.section`
    width: 100%;
    padding-top: 3rem;
    

    h1{
      font-size: 3rem;
      text-align : center;
    }

    .container{
      display: flex;
      flex-direction: column; 
      justify-content: center;
      align-items: center;
      gap: 5rem;
      margin-top : 4rem;

      .contact{
        width: 40%; 
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        gap: 2rem;

        input{
          width: 66%; height: 3.5rem;
          background: transparent;
          border: 0.2rem solid ${({ theme }) => theme.colors.border};
          outline: none;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.border};
          padding: 0 0.5rem;
        }

        textarea{
          width: 66%;
          background: transparent;
          border: 0.2rem solid ${({ theme }) => theme.colors.border};
          outline: none;
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.border};
          padding: 0 0.5rem;
        }

        .submit{
          width: 8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.border};
          transition: 0.2s all;

          &:hover{
            transform: translateY(-0.4rem)
          }
        }
      }
    }  


    @media (max-width : ${({theme}) => theme.media.mobile}){
      .container{
        .contact{
          width: 100%;

          input{
            width: 90%; height: 3.5rem;
          }

          textarea{
            width: 90%;
          }
        }
      }
    }
  `;


  return (
    <>
      <Wrapper>
        <h1>Feel Free To Contact Us</h1>
        <div className="container">

          <form action="https://formspree.io/f/xqkvqkon" method="POST" className="contact">
            <input type="text" placeholder="Enter your name" name="username" autoComplete="off " required />

            <input type="email" placeholder="Enter your email" name="email" autoComplete="off " required />

            <textarea name="message" cols="30" rows="6" autoComplete="off " required></textarea>

            <input type="submit" value="Send" className="submit" />
          </form>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4733708329577!2d77.21322187542589!3d28.64554167565764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4022d7e6c7%3A0x247b4ac8fd63a254!2sHotel%20Maya%20Cottage!5e0!3m2!1sen!2sin!4v1692431618796!5m2!1sen!2sin" height="450" style={{ border: "0", width: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </Wrapper>
    </>
  )
}

export default Contact;