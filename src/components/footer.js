import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
      <div className="copyright">
        Copyright &copy; 2020 Sonova AG. All rights reserved.
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--color-grey-dark);
  font-size: 2.1rem;
  padding: 2rem 0 2.2rem;
  border-top: 1px solid var(--color-grey);
  @media (min-width: 768px) {
    font-size: 1.6rem;
    border-top: none;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      padding: 0 1rem;
      &:first-child {
        border-right: 1px solid var(--color-grey);
      }
    }
  }
  .copyright {
    display: none;
    @media (min-width: 768px) {
      display: block;
      text-align: center;
      padding-top: 1rem;
      color: var(--color-white);
    }
  }`;
export default Footer;
