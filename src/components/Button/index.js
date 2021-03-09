import React from 'react';
import { Button } from './Button';

const PrimaryButton = ({ btnstate, onclick, children }) => {
  const btncolor = btnstate === 'active' ? '#09247c' : '#ADB3D8';

  return (
    <Button onClick={onclick} btncolor={btncolor}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
