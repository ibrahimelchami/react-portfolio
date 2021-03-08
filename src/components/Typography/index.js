import React from 'react';
import { PageHeading, PageSubHeading } from './Typography';

export const PgH = ({ children }) => {
  return <PageHeading>{children}</PageHeading>;
};

export const PgSH = ({ children }) => {
  return <PageSubHeading>{children}</PageSubHeading>;
};
