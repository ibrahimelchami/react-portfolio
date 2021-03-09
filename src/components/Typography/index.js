import React from 'react';
import {
  SiteHeading,
  SiteSubheading,
  PageHeading,
  PageSubHeading,
  ParagraphHeading,
  SectionHeading,
  Paragraph,
  ListStyle,
} from './Typography';

export const SiteH = ({ children }) => {
  return <SiteHeading>{children}</SiteHeading>;
};

export const SiteSH = ({ children }) => {
  return <SiteSubheading>{children}</SiteSubheading>;
};

export const PgH = ({ children }) => {
  return <PageHeading>{children}</PageHeading>;
};

export const PgSH = ({ children }) => {
  return <PageSubHeading>{children}</PageSubHeading>;
};

export const ParagraphH = ({ children }) => {
  return <ParagraphHeading>{children}</ParagraphHeading>;
};

export const SectionH = ({ children }) => {
  return <SectionHeading>{children}</SectionHeading>;
};

export const P1 = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export const List = ({ children }) => {
  return <ListStyle>{children}</ListStyle>;
};
