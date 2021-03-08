import React from 'react';

import Data from '../../Data';

import {
  Content,
  PgH,
  PgSH,
  CContainer,
  HContainer,
} from '../../components/ComponentLibrary';

const TheInside = () => {
  return (
    <Content pagecolor={'#DEF3FD'}>
      <HContainer>
        <PgH>{Data.theinside.title}</PgH>
        <PgSH>{Data.theinside.content}</PgSH>
      </HContainer>
    </Content>
  );
};

export default TheInside;
