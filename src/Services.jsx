import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from "./components/Context";
import { styled } from "styled-components";

const Wrapper = styled.section`
    width: 100%; height: 130vh;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
    padding: 4rem 0;

    .card {
      width: 30rem;
      color: #2bcbba;
      border: 0.05rem solid ${({theme}) => theme.colors.border};

      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title{
          font-size: 1.7rem;
          color: rgb(3, 8, 68);
          text-transform: uppercase;
        }

        .text{
          font-size: 1.3rem;
          text-align: justify;
        }

        .btn{
          width: 12rem;
          color: ${({theme}) => theme.colors.border};
          background-color: ${({theme}) => theme.colors.white};
          font-size: 1.5rem;
          border: 0.1rem solid ${({theme}) => theme.colors.border};
          outline: none;

          &:hover {
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.border};
          }
        }
      }
    }

    @media (max-width : ${({theme}) => theme.media.mobile}){
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
  `

const Services = () => {

  const { services } = useGlobalContext();

  return (
    <Wrapper>
      {
        services.map((currElem) => {

          const { id, img, heading, para } = currElem;

          return (
            <div key={id} className="card">
              <img className="card-img-top" src={img} alt="Card" />
              <div className="card-body">
                <h5 className="title card-title">{heading}</h5>
                <p className="text card-text">{para}</p>
                <button className="btn btn-primary">GET SERVICE</button>
              </div>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

export default Services;