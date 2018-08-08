/*
 * @component-name: index,
 * @parent : 
 * @child  : App
 * Use      : provide store to the component
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/store';
import './styles/index.css';
require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
