/*
 * @Author: canlong.shen
 * @Date: 2021-04-28 17:02:41
 * @LastEditors: your name
 * @LastEditTime: 2021-05-09 16:49:18
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Long from './long';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Long />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
