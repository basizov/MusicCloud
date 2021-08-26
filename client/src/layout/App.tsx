import { Button, Container, createTheme, ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { LoginFormik } from '../components/tagComponents/LoginFormik';
import { useTypedThunkDispatch } from '../hooks/useTypedDispatch';
import useTypedSelector from '../hooks/useTypedSelector';
import { authAsyncHandler, logoutAsyncHandler } from '../store/authStore/asyncActions';

export const App: React.FC = () => {
  const isAuth = useTypedSelector(s => s.auth.isAuth);
  const dispatch = useTypedThunkDispatch();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark'
        },
      }),
    [],
  );

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(authAsyncHandler());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {isAuth ?
          <Button onClick={() => dispatch(logoutAsyncHandler())}>
            Выйти
          </Button>
          : <LoginFormik />}
      </Container>
    </ThemeProvider>
  );
};
