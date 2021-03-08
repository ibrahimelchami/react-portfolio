import React from 'react';

import { Body } from './content';

const Content = ({ pagecolor, children }) => {
  return <Body bgcolor={pagecolor}>{children}</Body>;
};

export default Content;
