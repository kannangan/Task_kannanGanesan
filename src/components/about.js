import React from 'react';
import styled from 'styled-components';
import checked from '../assets/checked.png';
import hallmarkBlue from '../assets/hallmark-blue.png';
import hallmarkRed from '../assets/hallmark-red.png';
import hallmarkGreen from '../assets/hallmark-green.png';

const About = () => {
  return (
    <SectionWrapper>
      <div className="check-list">
        <div className="text-container">
          <img src={checked} alt="icon" width="25" height="25" />
          <p>Teil der Sonova Gruppe: weltweit Nr. 1 für innovative Hörlosungen</p>
        </div>
        <div className="text-container">
          <img src={checked} alt="icon" width="25" height="25" />
          <p>91,4 % Kundenzufriedenheit (mit sehr gut)</p>
        </div>
        <div className="text-container">
          <img src={checked} alt="icon" width="25" height="25" />
          <p>91,2 % würden GEERS Ihren Freunden oder Kollegen weiterempfehlen</p>
        </div>
      </div>
      <div className="side">
        <div className="icons">
          <img src={hallmarkGreen} alt="Service Garantie" />
          <img src={hallmarkRed} alt="Best-Preis Garantie" />
          <img src={hallmarkBlue} alt="Zufriedenheits Garantie" />
        </div>
        <div className="button-main">
          <a href="#"><b>Ja,ich will besser hören</b> </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: 4.6rem 1rem 8.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin: 8.2rem 9rem 0;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 4.2rem;
  }
  .check-list {
    @media (min-width: 768px) {
      margin-right: 4rem;
      font-weight: 700;
    }
  }
  .text-container {
    display: flex;
    align-items: flex-start;
    img {
      margin-top: 0.3rem;
      @media (min-width: 768px) {
        margin-top: 0.8rem;
      }
      @media (min-width: 1280px) {
        margin-top: 0;
      }
    }
    p {
      margin-left: 1.4rem;
    }
    &:not(:last-child) {
      margin-bottom: 4.1rem;
    }
    &:last-child {
      margin-bottom: 8.2rem;
    }
  }
  .side {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1280px) {
      width: 50%;
      align-self: flex-start;
    }
    .icons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 4rem;
      width: 100%;
      max-width: 40rem;
      img:not(:last-child) {
        margin-right: 2rem;
      }
    }
    .button-main {
      min-width: 28.6rem;
    }
  }`;
export default About;
