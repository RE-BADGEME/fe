import React from 'react';
import { Button } from '@material-tailwind/react/components/Button';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const RoundButton = ({ children, onClick }: Props) => {
  return (
    <Button color="blue" onClick={onClick}>
      {children}
    </Button>
  );
};

export default RoundButton;
