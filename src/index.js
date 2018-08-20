import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//==============================================================================
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducers/';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(promise, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
