import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
//import App from './App';
import './index.css';
import PageStruct from "./pages/sitestruct/PageStruct";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
    <PageStruct />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
