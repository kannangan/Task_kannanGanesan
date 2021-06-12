import React from 'react';
import styled from 'styled-components';
/*For Desktop version */
const Info = ({ image, imageDesc, texts, type }) => {
  return (
    <SectionWrapper>
      <div className={type === 1 ? 'container' : 'container container-right'}>
        <img src={image} alt={imageDesc} />
        <div className="text-container">
          {texts.map((text) => {
            const { id, textContent } = text;
            return (
              <p key={id} className="text">
                {textContent}
              </p>
            );
          })}
        </div>
      </div>
      {type === 1 && (
        <div className="button-main">
          <a href="#"><b>Hörgeräte unverbindlich probetragen</b></a>
        </div>
      )}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1280px) {
    max-width: 1100px;
    margin: 0 auto;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    @media (min-width: 1280px) {
      margin: 4rem 0;
    }
    img {
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }
    }
    background-color: var(--color-grey);
    .text-container {
      @media (min-width: 768px) {
        align-self: flex-start;
        width: 50%;
      }
      .text {
        padding: 0 1.6rem;
        margin-top: 4rem;
        @media (min-width: 768px) {
          font-size: 1.5rem;
          padding: 0 1.8rem;
          margin-top: 3rem;
        }
        @media (min-width: 1280px) {
          font-size: 1.8rem;
          padding: 0 4rem;
          margin-top: 4rem;
        }
        &:last-child {
          margin-bottom: 4.5rem;
          @media (min-width: 768px) {
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }

  .container-right {
    img {
      order: 2;
    }
    .text-container {
      @media (min-width: 768px) {
        order: 1;
      }
    }
  }
  .button-main {
    margin: 2.8rem 0 3rem;
    @media (min-width: 768px) {
      margin: 5.3rem 0 5.5rem;
    }
  }`;
export default Info;
