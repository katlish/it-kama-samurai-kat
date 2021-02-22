import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from './redux/store';
import './index.css';
import UsersContainer from './components/UsersContainer';

console.log("store in index.js-", store)

ReactDOM.render(
  <Provider store={store}>
    <UsersContainer />
  </Provider>,
  document.getElementById('root')
);