import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import App from './App';

import Navbar from "../src/components/Navbar";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <Navbar />
    {/* </ContextProvider> */}
  </React.StrictMode>,
);
