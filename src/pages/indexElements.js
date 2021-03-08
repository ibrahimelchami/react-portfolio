import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa';

export const CardContainer = styled.div`
  height: 100%;
  padding: 160px 10%;
`;

export const Content = styled.div`
  padding-top: 25vh;
  background: #fcf7de;
  @media screen and (max-width: 720px) {
    padding-top: 200px;
    width: 100%;
    margin-left: unset;
  }
`;

export const Heading = styled.h1`
  font-family: 'Source Serif Pro Black';
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

export const SubHeading = styled.h2`
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

export const HeadingContainer = styled.div`
  margin: 0 0 120px 0;

  @media screen and (max-width: 600px) {
  }
`;
