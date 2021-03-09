import styled from 'styled-components';
import { CoContainer } from '../ComponentLibrary';

export const SiteHeading = styled.h1`
  font-family: 'Source Serif Pro';
  text-align: center;
  font-size: 88px;
  line-height: 96px;
  color: #141c24;

  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const SiteSubheading = styled.h2`
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

export const PageHeading = styled.h1`
  font-family: 'Source Serif Pro';
  text-align: center;
  font-size: 88px;
  line-height: 96px;
  color: #141c24;

  margin: 0 0 16px 0;

  @media screen and (max-width: 600px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export const PageSubHeading = styled.h2`
  font-family: 'Open Sans';
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #283038;

  max-width: 800px;
  margin: auto;

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
    padding: 16px;
  }
`;

export const SectionHeading = styled.h1`
  font-family: 'Source Serif Pro';
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  color: #283038;

  margin: 88px 0 16px 0;
  padding: 0 16px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const ParagraphHeading = styled.h2`
  font-family: 'Source Serif Pro';
  text-align: left;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #283038;

  margin: 80px 0 16px 0;
  padding: 0 16px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Open Sans';
  text-align: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #283038;

  margin: 0 0 32px 0;
  padding: 0 16px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ListStyle = styled.div`
  font-family: 'Open Sans';
  color: #283038;
  ul {
    margin: 16px 0 32px 0;
    font-size: 20px;
    line-height: 32px;
    list-style-type: decimal-leading-zero;

    @media screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  li {
    margin: 0 0 16px 0;
  }
`;
