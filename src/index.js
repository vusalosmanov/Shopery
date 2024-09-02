import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/index.css'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> vusal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
=======
import { Provider } from 'react-redux';
import { store } from './services/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
>>>>>>> Aisel
    <App />
  </Provider>,
)