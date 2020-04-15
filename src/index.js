import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';

import './index.css';


render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
