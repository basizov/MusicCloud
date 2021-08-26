import React from 'react';
import { IAuthUser } from '../../models/IUser';
import { useTypedThunkDispatch } from '../../hooks/useTypedDispatch';
import { loginAsyncHandler } from '../../store/authStore/asyncActions';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { SchemaOf, object, string } from 'yup';

const initialValues: IAuthUser = {
  email: '',
  password: ''
};

export const LoginFormik: React.FC = () => {
  const dispatch = useTypedThunkDispatch();
  const validationSchema: SchemaOf<IAuthUser> = object({
    email: string().email('Invalid email').required('Fill email field'),
    password: string().required('Fill password field')
  });

  return (
    <section className="login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await dispatch(loginAsyncHandler(values));
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid, dirty }) => (
          <form className="login__form" onSubmit={handleSubmit}>
            <TextField
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={e => e.target.select()}
              label="Введите свой e-mail:" />
            {touched && touched.email && <h2>{errors.email}</h2>}
            <TextField
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={e => e.target.select()}
              label="Введите свой пароль:" />
            {touched && touched.password && <h2>{errors.password}</h2>}
            <Button
              disabled={!isValid && !dirty}
              type='submit'>
              Войти
            </Button>
          </form>
        )}
      </Formik>
    </section>
  );
};
