import React from 'react';

import Data from '../../Data';

import {
  Content,
  PgH,
  PgSH,
  CContainer,
  HContainer,
} from '../../components/ComponentLibrary';

const Vanmates = () => {
  return (
    <Content pagecolor={'#FAE2DF'}>
      <HContainer>
        <PgH>{Data.vanmates.title}</PgH>
        <PgSH>{Data.vanmates.content}</PgSH>
      </HContainer>
    </Content>
  );
};

export default Vanmates;
