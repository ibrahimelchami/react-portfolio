import React from 'react';
import { CardContainer, HeadingContainer } from './Containers';

export const CContainer = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export const HContainer = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};
