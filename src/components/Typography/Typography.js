import styled from 'styled-components';

export const PageHeading = styled.h1`
  font-family: 'Source Serif Pro';
  text-align: center;
  font-size: 88px;
  line-height: 96px;
  color: #141c24;

  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export const PageSubHeading = styled.h2`
  font-family: 'Open Sans';
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 64px;
  color: #283038;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 40px;
  }
`;
