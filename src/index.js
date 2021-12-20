import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Store from './context/Context';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Store>
      <App />
    </Store>
  </StrictMode>,
  rootElement
);
