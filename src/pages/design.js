import React from 'react';
import { Background, Body } from './designElements.js';
import { NavCard, NavBar } from '../components/ComponentLibrary';
import Data from '../Data';

const Design = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <Body>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={Data.theinside.image}
        ></NavCard>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={Data.theinside.image}
        ></NavCard>
        <NavCard
          title={Data.theinside.title}
          content={Data.theinside.content}
          image={Data.theinside.image}
        ></NavCard>
      </Body>
    </div>
  );
};

export default Design;
