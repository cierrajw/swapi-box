import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));

const router = (
  <BrowserRouter>
  <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

