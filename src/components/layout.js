import React from 'react';
import styled from 'styled-components';
import bgBannerMobile from '../assets/bg-banner-mobile.jpeg';
import bgBannerDesktop from '../assets/bg-banner-desktop.jpeg';
import quotes from '../assets/green-quotes.png';

const Layout = () => {
  return (
    <BannerWrapper>
      <div className="content-layout">
        <img src={quotes} alt="Quotes" />
        <h4>GEERS, DIE VERSTEHEN WAS VOM HÖREN.</h4>
        <p>Thomas Gottschalk</p>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.section`
  height: 27.9rem;
  background: url(${bgBannerMobile});
  background-position: center;
  background-size: cover;
  color: var(--color-white);
  @media (min-width: 768px) {
    background: url(${bgBannerDesktop});
    background-position: center;
    background-size: cover;
    padding: 0 1.5rem 0;
  }
  @media (min-width: 1280px) {
    padding: 0 14.5rem 0;
  }
  .content-layout {
    position: relative;
    img {
      position: absolute;
      top: 2.2rem;
      left: 1.8rem;
      width: 4.8rem;
      height: 4.8rem;
      @media (min-width: 768px) {
        width: 8rem;
        height: 8rem;
      }
    }
    h4,
    p {
      margin-left: 8rem;
      @media (min-width: 768px) {
        margin-left: 12rem;
      }
    }
    h4 {
      padding-top: 2.2rem;
      max-width: 32rem;
    }
    p {
      font-size: 1.4rem;
      @media (min-width: 678px) {
        font-size: 2rem;
      }
    }
  }`;
export default Layout;
