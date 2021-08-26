import React, { useEffect } from 'react';
import { LoginFormik } from '../components/tagComponents/LoginFormik';
import { BaseButton } from '../components/uiComponents/BaseButton/BaseButton';
import { useTypedThunkDispatch } from '../hooks/useTypedDispatch';
import useTypedSelector from '../hooks/useTypedSelector';
import { authAsyncHandler, logoutAsyncHandler } from '../store/authStore/asyncActions';

export const App: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);
  const dispatch = useTypedThunkDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(authAsyncHandler());
    }
  }, []);

  return (
    <main className="container">
      {isAuth ?
        <BaseButton onClick={() => dispatch(logoutAsyncHandler())}>
          Выйти
        </BaseButton>
        : <LoginFormik />}
    </main>
  );
};
