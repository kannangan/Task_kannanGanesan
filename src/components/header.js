import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import logo from '../assets/logo.png';
import headerMobile from '../assets/header-mobile.jpg';
import headerDesktop from '../assets/header-desktop.jpeg';
import trustCert from '../assets/trust-cert-kundenzufriedenheit.png';
import trustLogo from '../assets/trust-logo.png';
import trustShops from '../assets/trusted-shops.png';
import stars from '../assets/stars.png';

const Header = () => {
  const rating = 4.1;

  const { isTablet } = useGlobalContext();

  return (
    <HeaderWrapper>
      <div className="top-bar">
        <img src={logo} alt="Geers" />
        <div className="contact">
          <h4 className="phone-number">030 3080 7688</h4>
          <div className="time">
            <p>Mo - Sa</p>
            <p>9 - 18 Uhr</p>
          </div>
        </div>
      </div>
      <div className="header">
        {!isTablet && (
          <img className="header-image" src={headerMobile} alt="laugingimage" />
        )}
        <div className="introduction">
          <h3>
            Das richtige Hörgerät verbessert mehr als nur Ihr Hören.
          </h3>
          <div className="button-main">
            <a href="#"><b>Jetzt Hörgerät Kostenlos testen</b></a>
          </div>
          <div className="certificate">
            <img
              src={trustCert}
              alt="Platz Kundenzufriedenheit"
              width="94"
              height="47"
            />
            <img
              src={trustLogo}
              alt="Kundenauszeichnung"
              width="45"
              height="45"
            />
            <img src={trustShops} alt="Trusted Shops" width="45" height="45" />
            <div className="rating">
              <img
                src={stars}
                alt={`Rating ${rating}/5`}
                width="112"
                height="20"
              />
              <p>{rating}/5</p>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: var(--color-white);
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1.2rem 1.1rem 1.8rem;
    border-bottom: 1px solid var(--color-grey);
    max-width: 1100px;
    margin: 0 auto;
    @media (min-width: 1000px) {
      padding: 1.2rem 0 1.8rem;
    }
    img {
      width: 7.9rem;
      height: 2.3rem;
      @media (min-width: 768px) {
        align-self: center;
        width: 11.9rem;
        height: 3.2rem;
      }
    }
    .contact{
      @media (min-width: 1280px) {
        padding-right: 4rem;
      }
      .phone-number {
        color: var(--color-green);
        font-size: 2.2rem;
        @media (min-width: 768px) {
          font-weight: 400;
        }
      }
      .time {
        display: none;
        @media (min-width: 768px) {
          display: flex;
          justify-content: flex-end;
          color: var(--color-green);
          p {
            font-size: 1.5rem;
            &:first-child {
              margin-right: 1.7rem;
            }
          }
        }
      }
    }
  }
  .header {
    .header-image {
      width: 100%;
      height: auto;
    }
    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      background: url(${headerDesktop});
      background-size: cover;
      background-position: center;
      margin-bottom: 7rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .introduction {
    background-color: var(--color-grey);
    padding: 3.5rem 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -0.5rem;
    @media (min-width: 768px) {
      width: 380px;
      height: 314px;
      padding: 3rem 1.8rem;
      margin: 4rem 2rem 4rem;
      grid-column-start: 2;
    }
    @media (min-width: 1280px) {
      width: 496px;
      height: 414px;
      padding: 3rem 2.3rem;
      margin: 4rem 0;
      justify-content: center;
    }
    h3 {
      margin-bottom: 2.9rem;
      @media (min-width: 768px) {
        margin-bottom: 1.4rem;
      }
      @media (min-width: 1280px) {
        margin: 4.1rem;
      }
    }
  }

  .certificate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.4rem 0 0;
    min-width: 32rem;
    max-width: 34.3rem;
    width: 90%;
    @media (min-width: 768px) {
      margin: 1.5rem 0 0;
    }
    @media (min-width: 1280px) {
      margin: 4.2rem 0 0;
    }
    .rating {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }`;
export default Header;
