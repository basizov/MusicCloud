import React from 'react';
import { IAuthUser } from '../../models/IUser';
import { useTypedThunkDispatch } from '../../hooks/useTypedDispatch';
import { loginAsyncHandler } from '../../store/authStore/asyncActions';
import { BaseInput } from '../uiComponents/BaseInput/BaseInput';
import { Formik } from 'formik';
import { BaseButton } from '../uiComponents/BaseButton/BaseButton';

const initialValues: IAuthUser = {
  email: '',
  password: ''
};

export const LoginFormik: React.FC = () => {
  const dispatch = useTypedThunkDispatch();

  return (
    <section className="login">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await dispatch(loginAsyncHandler(values));
          actions.resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form className="login__form" onSubmit={handleSubmit}>
            <BaseInput
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onFocus={e => e.target.select()}
              placeholder="Введите свой e-mail:" />
            <BaseInput
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onFocus={e => e.target.select()}
              placeholder="Введите свой пароль:" />
            <BaseButton type='submit'>Войти</BaseButton>
          </form>
        )}
      </Formik>
    </section>
  );
};
