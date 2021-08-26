import React, { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';
import { useTypedThunkDispatch } from '../../hooks/useTypedDispatch';
import { IAuthUser } from '../../models/IUser';
import { loginAsyncHandler } from '../../store/authStore/asyncActions';
import { BaseButton } from '../uiComponents/BaseButton/BaseButton';
import { BaseInput } from '../uiComponents/BaseInput/BaseInput';

const initialState: IAuthUser = {
  email: '',
  password: ''
};

export const LoginForm: React.FC = () => {
  const dispatch = useTypedThunkDispatch();
  const [authCredentials, setAuthCredentials] = useState<IAuthUser>(initialState);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(loginAsyncHandler(authCredentials));
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
