import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface ButtonOutlinedProps {
  variant?: 'default' | 'highlight';
  disabled?: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
  variant,
  disabled,
  handleClick,
  children,
}) => {
  // Styles
  const classes = useStyles();

  function getVariant(type: typeof variant): string {
    switch (type) {
      case 'highlight':
        return classes.highlight;
      default:
        return '';
    }
  }

  return (
    <Button
      variant="outlined"
      size="medium"
      disabled={disabled}
      onClick={handleClick}
      className={`${classes.root} ${getVariant(variant)}`}
    >
      {children}
    </Button>
  );
};

export { ButtonOutlined };
