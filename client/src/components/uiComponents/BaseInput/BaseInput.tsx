import React, { InputHTMLAttributes } from 'react';
import baseInput from './baseInput.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

const BaseInput: React.FC<IProps> = (props) => {
  return (
    <input className={baseInput.input} {...props} />
  );
};

export default BaseInput;

