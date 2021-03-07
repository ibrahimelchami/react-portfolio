import React from 'react';
import { Button } from './Button';

const PrimaryButton = ({ children }) => {
  return <Button type="button">{children}</Button>;
};

export default PrimaryButton;
