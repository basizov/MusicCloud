import React, { useEffect } from 'react';
import LoginForm from '../components/tagComponents/LoginForm';
import { useTypedThunkDispatch } from '../hooks/useTypedDispatch';
import useTypedSelector from '../hooks/useTypedSelector';
import { authAsyncHandler } from '../store/authStore/asyncActions';

const App: React.FC = () => {
  const auth = useTypedSelector(s => s.auth);
  const dispatch = useTypedThunkDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(authAsyncHandler());
    }
  }, []);

  return (
    <main className="container">
      <LoginForm />
    </main>
  );
};

export default App;
