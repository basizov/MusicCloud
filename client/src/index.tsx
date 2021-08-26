import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './layout/App';
import './layout/style.scss';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
