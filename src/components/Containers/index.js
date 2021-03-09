import React from 'react';
import {
  ContentContainer,
  CardContainer,
  HeadingContainer,
  ImageContainer,
  ImageStyling,
  QuoteStyling,
} from './Containers';

export const CContainer = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export const HContainer = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

export const Image = ({ image, children }) => {
  return (
    <ImageContainer>
      <ImageStyling src={image}>{children}</ImageStyling>
    </ImageContainer>
  );
};

export const Quote = ({ bgcolor, children }) => {
  return <QuoteStyling backgroundcolor={bgcolor}>{children}</QuoteStyling>;
};

export const Content = ({ bgcolor, children }) => {
  return (
    <ContentContainer backgroundcolor={bgcolor}>{children}</ContentContainer>
  );
};
