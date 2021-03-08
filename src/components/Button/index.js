import React from 'react';
import { Button } from './Button';

const PrimaryButton = ({ link, children }) => {
  return <Button to={link}>{children}</Button>;
};

export default PrimaryButton;
