import React from 'react';
import { Button } from './Button';

const PrimaryButton = ({ btnstate, onclick, children }) => {
  const btncolor = btnstate === 'active' ? '#09247c' : '#ADB3D8';
  const hvrcolor = btnstate === 'active' ? '#223a89' : 'none';
  const hvrshadow =
    btnstate === 'active' ? '0 4px 4px 0px rgb(0, 0, 0, 0.15)' : 'none';
  const cursor = btnstate === 'active' ? 'pointer' : 'not-allowed';

  //0 4px 4px 0px rgb(0, 0, 0, 0.15) #223a89

  return (
    <Button
      onClick={onclick}
      btncolor={btncolor}
      hvrcolor={hvrcolor}
      hvrshadow={hvrshadow}
      cursor={cursor}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
