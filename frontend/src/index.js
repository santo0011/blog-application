import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster toastOptions={{
        position: 'top-right',
        style: {
          background: 'white',
          color: 'black'
        }
      }} />
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
