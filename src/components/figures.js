import React from 'react';
import styled from 'styled-components';
import { statistics } from '../data';

const Figures = () => {
  return (
    <SectionWrapper>
      <h2 className="title">Das sagen Menschen mit Hörgerät:*</h2>
      <ul>
        {statistics.map((item) => {
          const { id, percentage, text } = item;
          return (
            <li key={id}>
              <h1>{percentage}%</h1>
              <p>{text}</p>
            </li>
          );
        })}
        <li className="data">*EuroTrak-Studie 2018</li>
      </ul>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: 5.8rem 2.7rem 0 1rem;

  @media (min-width: 768px) {
    margin: 0 9rem 0;
  }
  @media (min-width: 1280px) {
    max-width: 1100px;
    margin: 0 auto;
  }
  h2 {
    font-weight: 700;
    margin-right: 5.5rem;
    margin-bottom: 3.4rem;
  }
  ul {
    @media (min-width: 500px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0 4.2rem;
    }
    li {
      display: flex;
      align-items: flex-start;

      @media (min-width: 500px) {
        flex-direction: column;
        font-weight: 700;
      }
      h1 {
        color: var(--color-green);
      }
      p {
        margin-left: 1rem;
        @media (min-width: 768px) {
          margin-left: 0;
        }
      }
      &:not(:last-child) {
        margin-bottom: 4.4rem;
      }
      &:last-child {
        margin-bottom: 5.1rem;
      }
    }
  }
  .data {
    font-size: 1.4rem;
    margin-bottom: 3.7rem;
    font-weight: 400;
  } `;
export default Figures;
