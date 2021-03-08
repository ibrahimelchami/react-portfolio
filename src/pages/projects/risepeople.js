import React from 'react';

import Data from '../../Data';

import {
  Content,
  PgH,
  PgSH,
  CContainer,
  HContainer,
} from '../../components/ComponentLibrary';

const RisePeople = () => {
  return (
    <Content pagecolor={'#FFE4D1'}>
      <HContainer>
        <PgH>{Data.risepeople.title}</PgH>
        <PgSH>{Data.risepeople.content}</PgSH>
      </HContainer>
    </Content>
  );
};

export default RisePeople;
