import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Providers from "./store/provider";

ReactDOM.render(
    <Providers>
      <BrowserRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </BrowserRouter>
    </Providers>,
  document.getElementById('root')
);
