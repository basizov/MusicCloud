import React, { ButtonHTMLAttributes } from 'react';
import baseButton from './baseButton.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const BaseButton: React.FC<IProps> = (props) => {
  return (
    <button className={baseButton.button} {...props}>
      {props.children}
    </button>
  );
};

