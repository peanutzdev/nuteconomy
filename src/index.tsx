import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComingSoon from "./components/ComingSoon";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComingSoon/>
  </React.StrictMode>
);


