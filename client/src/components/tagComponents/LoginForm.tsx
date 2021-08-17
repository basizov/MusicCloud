import React, { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';
import { IAuthUser } from '../../models/IUser';
import BaseButton from '../uiComponents/BaseButton/BaseButton';
import BaseInput from '../uiComponents/BaseInput/BaseInput';

const initialState: IAuthUser = {
  email: '',
  password: ''
};

const LoginForm: React.FC = () => {
  const [authCredentials, setAuthCredentials] = useState<IAuthUser>(initialState);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ ...authCredentials });
    setAuthCredentials(initialState);
  };

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setAuthCredentials({ ...authCredentials, [e.target.name]: e.target.value });
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={submitHandler}>
        <BaseInput
          name='email'
          value={authCredentials.email}
          onChange={changeInputHandler}
          onFocus={e => e.target.select()}
          placeholder="Введите свой e-mail:" />
        <BaseInput
          type='password'
          name='password'
          value={authCredentials.password}
          onChange={changeInputHandler}
          onFocus={e => e.target.select()}
          placeholder="Введите свой пароль:" />
        <BaseButton type='submit'>Войти</BaseButton>
      </form>
    </section>
  );
};

export default LoginForm;

