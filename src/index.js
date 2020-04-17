import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, } from "react-router-dom";

import App from './App';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';

import './index.css';


render(
  <Provider store={ store }>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
