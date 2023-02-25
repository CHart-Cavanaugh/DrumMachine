import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
import App from './App';

const AppWrapper = props => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

export default AppWrapper;